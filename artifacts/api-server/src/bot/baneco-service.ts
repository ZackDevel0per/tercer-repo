/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║                    BANECO SERVICE                                     ║
 * ║  Integración con la API QR Simple del Banco Económico S.A.           ║
 * ║                                                                      ║
 * ║  Flujo:                                                              ║
 * ║  1. cifrar()       → GET /authentication/encrypt (AES con clave)    ║
 * ║  2. obtenerToken() → POST /authentication/authenticate               ║
 * ║  3. generarQR()    → POST /qrsimple/generateQR (Bearer token)       ║
 * ║  4. verificarEstado() → GET /qrsimple/v2/statusQR/{id}              ║
 * ║                                                                      ║
 * ║  Todos los requests llevan Content-Type: application/json.          ║
 * ║  El token vence cada 30 min — se solicita uno fresco en cada op.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import axios from "axios";

const BASE_URL_DEFAULT = "https://apimkt.baneco.com.bo/ApiGateway";

const JSON_HEADERS = { "Content-Type": "application/json" };

export interface BanecoQRGenerado {
  qrId: string;
  qrBase64: string;
  expiry: Date;
}

export type BanecoVerifStatus = "pagado" | "pendiente" | "error";

export class BanecoService {
  private readonly username: string;
  private readonly password: string;
  private readonly aesKey: string;
  private readonly cuenta: string;
  private readonly baseUrl: string;

  constructor(
    username: string,
    password: string,
    aesKey: string,
    cuenta: string,
    baseUrl = BASE_URL_DEFAULT,
  ) {
    this.username = username;
    this.password = password;
    this.aesKey = aesKey;
    this.cuenta = cuenta;
    this.baseUrl = baseUrl;
  }

  /**
   * Cifra un texto usando el endpoint del banco.
   * GET /api/authentication/encrypt?text=VALOR&aesKey=LLAVE
   * Requiere Content-Type: application/json.
   */
  private async cifrar(texto: string): Promise<string> {
    const resp = await axios.get(
      `${this.baseUrl}/api/authentication/encrypt`,
      {
        params: { text: texto, aesKey: this.aesKey },
        headers: JSON_HEADERS,
        timeout: 10_000,
      },
    );
    if (typeof resp.data !== "string" || !resp.data) {
      throw new Error(
        `[Baneco] cifrar() devolvió respuesta inesperada: ${JSON.stringify(resp.data)}`,
      );
    }
    return resp.data as string;
  }

  /**
   * Solicita un token de acceso fresco.
   * 1. Cifra la contraseña con la llave AES del tenant.
   * 2. POST /api/authentication/authenticate con userName y password cifrado.
   * Devuelve el Bearer token.
   */
  private async obtenerToken(): Promise<string> {
    const passwordCifrado = await this.cifrar(this.password);

    const resp = await axios.post(
      `${this.baseUrl}/api/authentication/authenticate`,
      { userName: this.username, password: passwordCifrado },
      { headers: JSON_HEADERS, timeout: 10_000 },
    );

    if (resp.data?.responseCode !== 0) {
      throw new Error(
        `[Baneco] Autenticación falló: ${resp.data?.message ?? "sin mensaje"}`,
      );
    }
    const token = resp.data?.token as string | undefined;
    if (!token) throw new Error("[Baneco] Autenticación no devolvió token");
    return token;
  }

  /**
   * Genera un QR de pago único.
   * 1. Obtiene token fresco.
   * 2. Cifra el número de cuenta con la llave AES.
   * 3. POST /api/qrsimple/generateQR con Bearer token.
   * Devuelve qrId (para verificar estado) y la imagen en base64 (PNG).
   */
  async generarQR(monto: number, descripcion: string): Promise<BanecoQRGenerado> {
    const token = await this.obtenerToken();
    const cuentaCifrada = await this.cifrar(this.cuenta);

    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 1);
    expiry.setHours(23, 59, 0, 0);
    const dueDate = expiry.toISOString().split("T")[0]; // yyyy-MM-dd

    const transactionId = `BOT-${Date.now()}`;

    const resp = await axios.post(
      `${this.baseUrl}/api/qrsimple/generateQR`,
      {
        transactionId,
        accountCredit: cuentaCifrada,
        currency: "BOB",
        amount: monto,
        description: descripcion,
        dueDate,
        singleUse: true,
        modifyAmount: false,
        branchCode: "E0001",
      },
      {
        headers: {
          ...JSON_HEADERS,
          Authorization: `Bearer ${token}`,
        },
        timeout: 15_000,
      },
    );

    if (resp.data?.responseCode !== 0) {
      throw new Error(
        `[Baneco] generateQR falló: ${resp.data?.message ?? JSON.stringify(resp.data)}`,
      );
    }

    const qrId = resp.data?.qrId as string | undefined;
    const qrImage = resp.data?.qrImage as string | undefined;
    if (!qrId || !qrImage) {
      throw new Error(`[Baneco] generateQR no devolvió qrId o qrImage`);
    }

    return { qrId, qrBase64: qrImage, expiry };
  }

  /**
   * Verifica el estado de un QR generado.
   * GET /api/qrsimple/v2/statusQR/{qrId} con Bearer token.
   * statusQrCode: 0 = pendiente, 1 = pagado, 9 = anulado/error
   */
  async verificarEstado(qrId: string): Promise<BanecoVerifStatus> {
    const token = await this.obtenerToken();

    const resp = await axios.get(
      `${this.baseUrl}/api/qrsimple/v2/statusQR/${qrId}`,
      {
        headers: {
          ...JSON_HEADERS,
          Authorization: `Bearer ${token}`,
        },
        timeout: 10_000,
      },
    );

    if (resp.data?.responseCode !== 0) return "error";
    const code = resp.data?.statusQrCode as number | undefined;
    if (code === 1) return "pagado";
    if (code === 0) return "pendiente";
    return "error";
  }

  /**
   * Cancela un QR activo (solo funciona si aún no fue pagado).
   * No es crítico si falla.
   */
  async cancelarQR(qrId: string): Promise<void> {
    try {
      const token = await this.obtenerToken();
      await axios.delete(`${this.baseUrl}/api/qrsimple/cancelQR`, {
        data: { qrId },
        headers: {
          ...JSON_HEADERS,
          Authorization: `Bearer ${token}`,
        },
        timeout: 10_000,
      });
    } catch {
      // No es crítico si falla la cancelación
    }
  }
}
