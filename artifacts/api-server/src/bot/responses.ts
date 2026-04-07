/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║      RESPUESTAS PERSONALIZADAS DEL BOT - EDITABLE        ║
 * ║    Modifica aquí todos los mensajes del bot sin           ║
 * ║    tocar la lógica. Puedes agregar fotos, videos, etc.    ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * DONDE EDITAR PLANES:
 * 1. Todos los textos de planes están aquí (responses.ts)
 * 2. Los precios y información están en: src/bot/planes.ts
 * 3. Para reiniciar sin desconectar: Solo reinicia el workflow desde Replit
 */

/**
 * Tipos de respuesta:
 * - text: Mensaje de texto simple
 * - image: Foto/imagen
 * - video: Video
 * - document: Archivo
 */

export interface RespuestaMedia {
  tipo: "text" | "image" | "video" | "document";
  contenido: string;
  caption?: string;
}

export interface RespuestaBot {
  tipo: RespuestaMedia["tipo"][];
  contenido: (RespuestaMedia | string)[];
}

// ═══════════════════════════════════════════════════════════
// UTILIDAD: SELECCIÓN ALEATORIA DE VARIANTES
// ═══════════════════════════════════════════════════════════
export function elegirVariante<T>(variantes: T[]): T {
  return variantes[Math.floor(Math.random() * variantes.length)];
}

// ═══════════════════════════════════════════════════════════
// SALUDO INICIAL — 5 variantes para evitar mensajes repetitivos
// ═══════════════════════════════════════════════════════════
export function generarSaludoInicial(nombreEmpresa: string): string {
  const variantes = [
    `👋 *¡Hola! Bienvenido a ${nombreEmpresa}*

Somos tu mejor opción en entretenimiento en línea.

📺 *¿Qué quieres hacer?*

*1* → Contratar un plan
*2* → Conocer nuestras características
*3* → 🎁 Probar gratis el servicio
*4* → 📹 Guías de instalación
*5* → 💬 Solicitar hablar personalmente
*PRECIOS* → 💰 Ver lista de precios
*VERIFICAR* → 🔍 Ver mis cuentas activas

_Escribe el número que prefieres_ ⬇️`,

    `✨ *¡Bienvenido a ${nombreEmpresa}!*

El mejor entretenimiento digital, a tu alcance.

📋 *¿En qué puedo ayudarte?*

*1* → 📱 Ver planes y precios
*2* → ⭐ Características del servicio
*3* → 🎁 Solicitar demo gratuita
*4* → 📹 Guías de instalación
*5* → 🙋 Hablar con un asesor
*PRECIOS* → 💰 Lista completa de precios
*VERIFICAR* → 🔍 Consultar mis cuentas

_Solo escribe el número de tu opción_ 👇`,

    `🎬 *${nombreEmpresa}*

Streaming HD, FHD y 4K sin interrupciones.

📌 *Menú principal:*

*1* → Contratar un plan
*2* → Por qué elegirnos
*3* → Probar gratis
*4* → Cómo instalar
*5* → Hablar con soporte
*PRECIOS* → Ver precios
*VERIFICAR* → Mis cuentas activas

_¿Qué necesitas hoy?_ ✍️`,

    `📺 *${nombreEmpresa}* — ¡Hola, estamos aquí para ayudarte!

Elige lo que necesitas:

*1* → 🛒 Contratar un plan
*2* → ✅ Ver características
*3* → 🎯 Demo gratis
*4* → 📲 Guías de instalación
*5* → 💬 Atención personalizada
*PRECIOS* → 💵 Precios
*VERIFICAR* → 📋 Mis cuentas

_Responde con el número de tu elección_`,

    `👋 *${nombreEmpresa} te da la bienvenida*

¿Qué podemos hacer por ti hoy?

━━━━━━━━━━━━━━━━━━━━
*1* → Planes de servicio
*2* → Características
*3* → Prueba gratuita
*4* → Instalación
*5* → Hablar personalmente
*PRECIOS* → Tarifas
*VERIFICAR* → Mis cuentas
━━━━━━━━━━━━━━━━━━━━

_Escribe el número que necesites_ 📲`,

    `🛒 *¡Hola! Soy el asistente de ${nombreEmpresa}*

¿Qué necesitas hoy?

*1* → 📺 Ver planes y contratar
*2* → ✅ Conocer el servicio
*3* → 🎁 Prueba gratuita
*4* → 📲 Cómo instalar la app
*5* → 🙋 Hablar con un asesor
*PRECIOS* → 💰 Ver precios
*VERIFICAR* → 🔍 Mis cuentas activas

_Responde con el número_ 👇`,

    `Hola 👋 *${nombreEmpresa}*

Streaming HD y 4K para Bolivia 🇧🇴

━━━━━━━━━━━━━━━━━━━━
*1* → Contratar
*2* → Características
*3* → Demo gratis
*4* → Instalación
*5* → Atención personal
*PRECIOS* → Precios
*VERIFICAR* → Mis cuentas
━━━━━━━━━━━━━━━━━━━━

_¿En qué te ayudo?_ ✍️`,

    `🎬 *Bienvenido a ${nombreEmpresa}*

El IPTV que más se adapta a ti 📺

📌 *Elige una opción:*

*1* → 🛒 Planes disponibles
*2* → 💡 Por qué elegirnos
*3* → 🎯 Prueba sin costo
*4* → 📹 Guías de instalación
*5* → 💬 Hablar con soporte
*PRECIOS* → Lista de precios
*VERIFICAR* → Estado de mis cuentas

_Escríbeme el número_ 📲`,
  ];
  return elegirVariante(variantes);
}

export const SALUDO_INICIAL = generarSaludoInicial("{{EMPRESA}}");

// ═══════════════════════════════════════════════════════════
// RESPUESTAS POR NÚMERO/LETRA
// ═══════════════════════════════════════════════════════════

export const RESPUESTAS_NUMEROS: Record<string, RespuestaMedia[]> = {
  // ═══════════════════════════════════════════════════════════
  // OPCIÓN 3: PROBAR GRATIS
  // ═══════════════════════════════════════════════════════════
  "3": [
    {
      tipo: "text",
      contenido: `🎁 *Prueba {{EMPRESA}} GRATIS*

Puedes probar nuestro servicio sin costo. Elige la duración de tu demo:

*DEMO1* → Prueba de *1 hora* (completa)
*DEMO3* → Prueba de *3 horas* (completa)

_Solo escribe la opción y ¡listo! Recibirás tus credenciales al instante._ ⚡

*MENU* → Volver al menú principal`,
    },
  ],

  DEMO1: [
    { tipo: "text", contenido: "⏳ _Creando tu cuenta demo de 1 hora..._" },
  ],
  DEMO3: [
    { tipo: "text", contenido: "⏳ _Creando tu cuenta demo de 3 horas..._" },
  ],

  // ═══════════════════════════════════════════════════════════
  // OPCIÓN 1: PLANES
  // ═══════════════════════════════════════════════════════════
  "1": [
    {
      tipo: "text",
      contenido: `📱 *¿Para cuántos dispositivos requiere el servicio?*

*P* → Un dispositivo
*Q* → Dos dispositivos
*R* → Tres dispositivos

_Selecciona la opción que necesitas_`,
    },
  ],

  // ═══════════════════════════════════════════════════════════
  // PLANES 1 DISPOSITIVO (Letra P)
  // ═══════════════════════════════════════════════════════════
  P: [
    {
      tipo: "text",
      contenido: `📺 *Planes - Un Dispositivo*

💰 *1 MES* → Bs 29
💰 *3 MESES* → Bs 82
💰 *6 MESES* → Bs 155 (+1 mes gratis = 7 meses)
💰 *12 MESES* → Bs 300 (+2 meses gratis = 14 meses)

*P1* → Contratar 1 mes (Bs 29)
*P2* → Contratar 3 meses (Bs 82)
*P3* → Contratar 6 meses (Bs 155)
*P4* → Contratar 12 meses (Bs 300)`,
    },
  ],

  P1: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Un Dispositivo - 1 Mes*
💰 Bs 29

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 29* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  P2: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Un Dispositivo - 3 Meses*
💰 Bs 82

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 82* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  P3: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Un Dispositivo - 6 Meses*
💰 Bs 155 🎁 +1 mes gratis (Total: 7 meses)

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 155* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  P4: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Un Dispositivo - 12 Meses*
💰 Bs 300 🎁 +2 meses gratis (Total: 14 meses)

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 300* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  // ═══════════════════════════════════════════════════════════
  // PLANES 2 DISPOSITIVOS (Letra Q)
  // ═══════════════════════════════════════════════════════════
  Q: [
    {
      tipo: "text",
      contenido: `📺 *Planes - Dos Dispositivos*

💰 *1 MES* → Bs 35
💰 *3 MESES* → Bs 100
💰 *6 MESES* → Bs 190 (+1 mes gratis = 7 meses)
💰 *12 MESES* → Bs 380 (+2 meses gratis = 14 meses)

*Q1* → Contratar 1 mes (Bs 35)
*Q2* → Contratar 3 meses (Bs 100)
*Q3* → Contratar 6 meses (Bs 190)
*Q4* → Contratar 12 meses (Bs 380)`,
    },
  ],

  Q1: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Dos Dispositivos - 1 Mes*
💰 Bs 35

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 35* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  Q2: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Dos Dispositivos - 3 Meses*
💰 Bs 100

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 100* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  Q3: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Dos Dispositivos - 6 Meses*
💰 Bs 190 🎁 +1 mes gratis (Total: 7 meses)

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 190* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  Q4: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Dos Dispositivos - 12 Meses*
💰 Bs 380 🎁 +2 meses gratis (Total: 14 meses)

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 380* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  // ═══════════════════════════════════════════════════════════
  // PLANES 3 DISPOSITIVOS (Letra R)
  // ═══════════════════════════════════════════════════════════
  R: [
    {
      tipo: "text",
      contenido: `📺 *Planes - Tres Dispositivos*

💰 *1 MES* → Bs 40
💰 *3 MESES* → Bs 115
💰 *6 MESES* → Bs 225 (+1 mes gratis = 7 meses)
💰 *12 MESES* → Bs 440 (+2 meses gratis = 14 meses)

*R1* → Contratar 1 mes (Bs 40)
*R2* → Contratar 3 meses (Bs 115)
*R3* → Contratar 6 meses (Bs 225)
*R4* → Contratar 12 meses (Bs 440)`,
    },
  ],

  R1: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Tres Dispositivos - 1 Mes*
💰 Bs 40

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 40* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  R2: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Tres Dispositivos - 3 Meses*
💰 Bs 115

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 115* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  R3: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Tres Dispositivos - 6 Meses*
💰 Bs 225 🎁 +1 mes gratis (Total: 7 meses)

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 225* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  R4: [
    {
      tipo: "text",
      contenido: `✅ *Plan Seleccionado: Tres Dispositivos - 12 Meses*
💰 Bs 440 🎁 +2 meses gratis (Total: 14 meses)

Para completar tu activación:
1️⃣ Realiza tu pago de *Bs 440* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    },
  ],

  // ═══════════════════════════════════════════════════════════
  // OTRAS OPCIONES
  // ═══════════════════════════════════════════════════════════
  "2": [
    {
      tipo: "text",
      contenido: `✨ *¿Por qué elegirnos?*

✅ Streaming sin interrupciones
✅ Señal HD, FHD y 4K disponible
✅ Miles de películas, series y canales en vivo
✅ Acceso desde cualquier dispositivo
✅ Múltiples dispositivos simultáneamente
✅ Pago seguro y rápido
✅ Atención al cliente 24/7

_¡Contrata y obtén el mejor servicio de TV en Bolivia!_ 🏆

🎁 *¿Quieres probarlo gratis?*
*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*MENU* → Volver al menú principal`,
    },
  ],

  // ═══════════════════════════════════════════════════════════
  // OPCIÓN 4: GUÍAS DE INSTALACIÓN
  // ═══════════════════════════════════════════════════════════
  "4": [
    {
      tipo: "text",
      contenido: `📹 *Guías de Instalación {{EMPRESA}}*

Selecciona tu dispositivo:

*41* → 📺 Smart TV (LG / Samsung)
*42* → 📦 Android TV Box / Android TV / TV Stick / Google TV
*43* → 📱 Celular o Tablet Android
*44* → 🍎 iPhone / iPad / Mac / MacBook
*45* → 💻 PC / Windows
*46* → 🌐 Instalar por Navegador (alternativa Android)

*MENU* → Volver al menú principal`,
    },
  ],

  // ── 41: Smart TV → sub-menú LG / Samsung ──
  "41": [
    {
      tipo: "text",
      contenido: `📺 *Instalación en Smart TV*

Elige tu marca:

*411* → 🟥 LG
*412* → 🔵 Samsung

*4* → Volver a guías
*MENU* → Menú principal`,
    },
  ],

  "411": [
    {
      tipo: "video",
      contenido: "LGTUTORIAL",
      caption: `🟥 *Instalación en Smart TV LG*\n\nSigue los pasos del video.\n\n*41* → Volver`,
    },
  ],

  "412": [
    {
      tipo: "video",
      contenido: "SAMSUNGTUTORIAL",
      caption: `🔵 *Instalación en Smart TV Samsung*\n\nSigue los pasos del video.\n\n*41* → Volver`,
    },
  ],

  // ── 42: Android TV Box / TV Stick / Google TV ──
  "42": [
    {
      tipo: "video",
      contenido: "ANDROIDTV",
      caption: `📦 *Instalación en Android TV Box / Android TV / TV Stick / Google TV*`,
    },
    {
      tipo: "text",
      contenido: `📲 *Pasos de instalación:*

Descarga desde tu dispositivo, desde la *Play Store*, la aplicación *Downloader* (como se ve en el video).

Una vez abierta, introduce el siguiente código:

*223062*

y presiona *Go*. Se descargará e instalará la app automáticamente.

💡 Si Downloader falla en tu dispositivo, escribe *46* para ver la instalación por navegador.

*4* → Volver a guías
*MENU* → Menú principal`,
    },
  ],

  // ── 43: Celular / Tablet Android ──
  "43": [
    {
      tipo: "text",
      contenido: `📱 *CÓMO INSTALAR EN CELULAR O TABLET*

⚠️ *NO está en Play Store*

Descarga la app desde este link:
👉 *bit.ly/mastviptv*

Al descargar presiona *"Descargar de todos modos"* y luego instálala. Si aparece una advertencia, elige *"Más detalles"* → *"Instalar de todos modos"*.

─────────────────────
✅ Si ya instalaste la app, puedes solicitar tu prueba gratuita escribiendo *3* y eligiendo:

*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*4* → Volver a guías
*MENU* → Menú principal`,
    },
  ],

  // ── 44: iPhone / iPad / Mac / MacBook ──
  "44": [
    {
      tipo: "video",
      contenido: "APPLE",
      caption: `🍎 *Instalación en iPhone / iPad / Mac / MacBook*`,
    },
    {
      tipo: "text",
      contenido: `🍎 *Pasos de instalación:*

Ve a la *App Store* y busca *SMARTERS PLAYER LITE*, o presiona este link para ir directo:
👉 *https://bit.ly/smarters-iphone*

Instálala, ábrela, acepta los términos y elige *"Xtream Code"*.

─────────────────────
✅ Cuando estés en la ventana principal de IPTV Smarters, puedes solicitar tu prueba gratuita escribiendo *3* y eligiendo:

*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

🌐 *URL del servidor:* http://mtv.bo:80

*4* → Volver a guías
*MENU* → Menú principal`,
    },
  ],

  // ── 45: PC / Windows ──
  "45": [
    {
      tipo: "video",
      contenido: "PCTUTORIAL",
      caption: `💻 *Instalación en PC / Windows*`,
    },
    {
      tipo: "text",
      contenido: `💻 *Pasos de instalación:*

Haz click en este enlace desde tu computadora para instalar *FULLTVMAS*:
👉 *https://bit.ly/mastvpc*

Descárgalo e instálalo. Si aparece una advertencia de Windows:
➡️ Presiona *"Más información"* → *"Ejecutar de todas formas"*
➡️ Siguiente → Siguiente → Se instalará.

─────────────────────
✅ Si ya tienes la app, escribe *3* para solicitar tu prueba gratuita:

*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*4* → Volver a guías
*MENU* → Menú principal`,
    },
  ],

  // ── 46: Instalación por Navegador (alternativa Android) ──
  "46": [
    {
      tipo: "text",
      contenido: `🌐 *Instalar por Navegador (si falla Downloader)*

Puedes usar cualquier navegador que tenga tu dispositivo Android.

Abre el navegador e ingresa:
👉 *bit.ly/mastviptv*

Sirve para:
✅ Android TV
✅ TV Box
✅ TV Stick
✅ Google TV

─────────────────────
✅ Si lograste instalar la app, escribe *3* para solicitar tu prueba gratuita:

*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*4* → Volver a guías
*MENU* → Menú principal`,
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PALABRAS CLAVE DE INSTALACIÓN (aliases a los tutoriales)
// El bot convierte el mensaje a mayúsculas antes de buscar,
// por eso todas las claves están en MAYÚSCULAS.
// ═══════════════════════════════════════════════════════════

// Samsung TV
RESPUESTAS_NUMEROS["SAMSUNG"] = RESPUESTAS_NUMEROS["412"];
RESPUESTAS_NUMEROS["SAMSUNGTV"] = RESPUESTAS_NUMEROS["412"];
RESPUESTAS_NUMEROS["TV SAMSUNG"] = RESPUESTAS_NUMEROS["412"];

// LG TV
RESPUESTAS_NUMEROS["LG"] = RESPUESTAS_NUMEROS["411"];
RESPUESTAS_NUMEROS["LGTV"] = RESPUESTAS_NUMEROS["411"];
RESPUESTAS_NUMEROS["TV LG"] = RESPUESTAS_NUMEROS["411"];

// Smart TV genérica → submenú LG/Samsung
RESPUESTAS_NUMEROS["SMARTTV"] = RESPUESTAS_NUMEROS["41"];
RESPUESTAS_NUMEROS["SMART TV"] = RESPUESTAS_NUMEROS["41"];
RESPUESTAS_NUMEROS["TV"] = RESPUESTAS_NUMEROS["41"];

// Android TV Box / TV Stick / Google TV / Fire Stick
RESPUESTAS_NUMEROS["TVBOX"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["TV BOX"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["ANDROIDTV"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["ANDROID TV"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["TVANDROID"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["TV ANDROID"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["FIRESTICK"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["FIRE STICK"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["GOOGLETV"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["GOOGLE TV"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["STICK"] = RESPUESTAS_NUMEROS["42"];
RESPUESTAS_NUMEROS["BOX"] = RESPUESTAS_NUMEROS["42"];

// Celular / Tablet Android
RESPUESTAS_NUMEROS["CELULAR"] = RESPUESTAS_NUMEROS["43"];
RESPUESTAS_NUMEROS["TELEFONO"] = RESPUESTAS_NUMEROS["43"];
RESPUESTAS_NUMEROS["TELÉFONO"] = RESPUESTAS_NUMEROS["43"];
RESPUESTAS_NUMEROS["TABLET"] = RESPUESTAS_NUMEROS["43"];
RESPUESTAS_NUMEROS["ANDROID"] = RESPUESTAS_NUMEROS["43"];
RESPUESTAS_NUMEROS["MOVIL"] = RESPUESTAS_NUMEROS["43"];
RESPUESTAS_NUMEROS["MÓVIL"] = RESPUESTAS_NUMEROS["43"];

// iPhone / iPad / Mac
RESPUESTAS_NUMEROS["IPHONE"] = RESPUESTAS_NUMEROS["44"];
RESPUESTAS_NUMEROS["IPAD"] = RESPUESTAS_NUMEROS["44"];
RESPUESTAS_NUMEROS["APPLE"] = RESPUESTAS_NUMEROS["44"];
RESPUESTAS_NUMEROS["MAC"] = RESPUESTAS_NUMEROS["44"];
RESPUESTAS_NUMEROS["MACBOOK"] = RESPUESTAS_NUMEROS["44"];
RESPUESTAS_NUMEROS["IOS"] = RESPUESTAS_NUMEROS["44"];

// PC / Windows / Laptop
RESPUESTAS_NUMEROS["PC"] = RESPUESTAS_NUMEROS["45"];
RESPUESTAS_NUMEROS["COMPUTADORA"] = RESPUESTAS_NUMEROS["45"];
RESPUESTAS_NUMEROS["COMPUTADOR"] = RESPUESTAS_NUMEROS["45"];
RESPUESTAS_NUMEROS["LAPTOP"] = RESPUESTAS_NUMEROS["45"];
RESPUESTAS_NUMEROS["CPU"] = RESPUESTAS_NUMEROS["45"];
RESPUESTAS_NUMEROS["WINDOWS"] = RESPUESTAS_NUMEROS["45"];
RESPUESTAS_NUMEROS["ORDENADOR"] = RESPUESTAS_NUMEROS["45"];

// Guías de instalación (comando 4)
RESPUESTAS_NUMEROS["INSTALACION"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["INSTALACIÓN"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["COMO INSTALO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["CÓMO INSTALO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["COMO INSTALAR"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["CÓMO INSTALAR"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["INSTALAR"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["INSTALO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DONDE DESCARGO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DÓNDE DESCARGO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DONDE OBTENGO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DÓNDE OBTENGO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DONDE DESCARGO LA APP"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DESCARGAR APP"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DESCARGAR"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["DESCARGA"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["COMO PRUEBO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["CÓMO PRUEBO"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["GUIA"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["GUÍA"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["GUIAS"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["GUÍAS"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["TUTORIAL"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["TUTORIALES"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["COMO FUNCIONA"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["CÓMO FUNCIONA"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["APP"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["APLICACION"] = RESPUESTAS_NUMEROS["4"];
RESPUESTAS_NUMEROS["APLICACIÓN"] = RESPUESTAS_NUMEROS["4"];

// ─── Lista completa de precios ───────────────────────────────────────────────
const _LISTA_PRECIOS: RespuestaMedia[] = [
  {
    tipo: "text",
    contenido: `💰 *Lista de Precios {{EMPRESA}}*

📺 *Un Dispositivo*
  • 1 mes      → *Bs 29*
  • 3 meses    → *Bs 82*
  • 6 meses    → *Bs 155* 🎁 +1 mes gratis
  • 12 meses   → *Bs 300* 🎁 +2 meses gratis

📺📺 *Dos Dispositivos*
  • 1 mes      → *Bs 35*
  • 3 meses    → *Bs 100*
  • 6 meses    → *Bs 190* 🎁 +1 mes gratis
  • 12 meses   → *Bs 380* 🎁 +2 meses gratis

📺📺📺 *Tres Dispositivos*
  • 1 mes      → *Bs 40*
  • 3 meses    → *Bs 115*
  • 6 meses    → *Bs 225* 🎁 +1 mes gratis
  • 12 meses   → *Bs 440* 🎁 +2 meses gratis

_Todos los planes incluyen acceso HD, FHD y 4K_ ✅

*1* → Contratar ahora
*3* → Probar gratis primero
*MENU* → Volver al menú principal`,
  },
];

// Precios (lista directa con todos los precios)
RESPUESTAS_NUMEROS["PRECIOS"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["PRECIO"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["COSTO"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["COSTOS"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUANTO CUESTA"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUÁNTO CUESTA"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUANTO VALE"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUÁNTO VALE"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUANTO ES"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUÁNTO ES"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["TARIFA"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["TARIFAS"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["MENSUALIDAD"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["VER PRECIOS"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["VER PLANES"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["QUE PLANES HAY"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["QUÉ PLANES HAY"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUALES SON LOS PLANES"] = _LISTA_PRECIOS;
RESPUESTAS_NUMEROS["CUÁLES SON LOS PLANES"] = _LISTA_PRECIOS;

// Contratar (va directo al flujo de selección de dispositivos)
RESPUESTAS_NUMEROS["PLAN"] = RESPUESTAS_NUMEROS["1"];
RESPUESTAS_NUMEROS["PLANES"] = RESPUESTAS_NUMEROS["1"];
RESPUESTAS_NUMEROS["QUIERO CONTRATAR"] = RESPUESTAS_NUMEROS["1"];
RESPUESTAS_NUMEROS["CONTRATAR"] = RESPUESTAS_NUMEROS["1"];
RESPUESTAS_NUMEROS["SUSCRIPCION"] = RESPUESTAS_NUMEROS["1"];
RESPUESTAS_NUMEROS["SUSCRIPCIÓN"] = RESPUESTAS_NUMEROS["1"];

// ═══════════════════════════════════════════════════════════
// VARIANTES DE RESPUESTAS — múltiples versiones por comando
// para reducir mensajes repetitivos e idénticos
// ═══════════════════════════════════════════════════════════

function _variantesSeleccionDispositivos(): RespuestaMedia[][] {
  return [
    [{ tipo: "text", contenido: `📱 *¿Para cuántos dispositivos requiere el servicio?*\n\n*P* → Un dispositivo\n*Q* → Dos dispositivos\n*R* → Tres dispositivos\n\n_Selecciona la opción que necesitas_` }],
    [{ tipo: "text", contenido: `📺 *Selecciona la cantidad de dispositivos:*\n\n*P* → 1 pantalla\n*Q* → 2 pantallas\n*R* → 3 pantallas\n\n_¿Cuántos equipos conectarás?_ 👇` }],
    [{ tipo: "text", contenido: `🖥️ *¿En cuántos dispositivos vas a usar el servicio?*\n\n*P* → Un dispositivo\n*Q* → Dos dispositivos\n*R* → Tres dispositivos\n\n_Elige la opción que se adapta a ti_` }],
    [{ tipo: "text", contenido: `🎯 *¿Para cuántas pantallas necesitas el servicio?*\n\n*P* → Un dispositivo\n*Q* → Dos dispositivos\n*R* → Tres dispositivos\n\n_Escribe P, Q o R según tu caso_ ✍️` }],
    [{ tipo: "text", contenido: `📡 *¿Cuántos dispositivos vas a conectar?*\n\n*P* → Una pantalla\n*Q* → Dos pantallas\n*R* → Tres pantallas\n\n_Solo escribe la letra correspondiente_ 👇` }],
    [{ tipo: "text", contenido: `📺 *¿En cuántos equipos van a ver el servicio?*\n\n*P* → Un equipo\n*Q* → Dos equipos\n*R* → Tres equipos\n\n_Responde con P, Q o R_ 📲` }],
    [{ tipo: "text", contenido: `🔢 *Elige la cantidad de dispositivos:*\n\n━━━━━━━━━━━━━━\n*P* → Un dispositivo\n*Q* → Dos dispositivos\n*R* → Tres dispositivos\n━━━━━━━━━━━━━━\n\n_¿Cuántos vas a usar?_ 👇` }],
    [{ tipo: "text", contenido: `💡 *Tenemos planes para todas las necesidades*\n\nIndica cuántos dispositivos necesitas:\n\n▶️ *P* → Un dispositivo\n▶️ *Q* → Dos dispositivos\n▶️ *R* → Tres dispositivos\n\n_Escribe la letra de tu elección_ ✅` }],
  ];
}

function _variantesCaracteristicas(): RespuestaMedia[][] {
  return [
    [{
      tipo: "text", contenido: `✨ *¿Por qué elegirnos?*

✅ Streaming sin interrupciones
✅ Señal HD, FHD y 4K disponible
✅ Miles de películas, series y canales en vivo
✅ Acceso desde cualquier dispositivo
✅ Múltiples dispositivos simultáneamente
✅ Pago seguro y rápido
✅ Atención al cliente 24/7

_¡Contrata y obtén el mejor servicio de TV en Bolivia!_ 🏆

🎁 *¿Quieres probarlo gratis?*
*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*MENU* → Volver al menú principal`,
    }],
    [{
      tipo: "text", contenido: `⭐ *Características de nuestro servicio*

🔷 Sin interrupciones ni buffering
🔷 Calidad HD, FHD y 4K
🔷 Miles de canales, películas y series
🔷 Compatible con cualquier dispositivo
🔷 Conexión simultánea en varios equipos
🔷 Pagos rápidos y seguros
🔷 Soporte disponible las 24 horas

_El mejor IPTV de Bolivia_ 🇧🇴

🎯 *¿Lo probamos gratis primero?*
*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*MENU* → Volver al menú principal`,
    }],
    [{
      tipo: "text", contenido: `🏆 *¿Por qué somos tu mejor opción?*

• Streaming continuo sin cortes
• Imagen HD, FHD y 4K
• Amplio catálogo: canales, series y películas
• Funciona en TV, celular, tablet y PC
• Varios dispositivos al mismo tiempo
• Proceso de pago simple y seguro
• Atención 24/7

_¡Únete a miles de clientes satisfechos!_ ✨

🎁 *Pruébalo antes de contratar:*
*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `📺 *Todo lo que incluye tu plan*

💎 Calidad HD, FHD y 4K real
🚀 Sin cortes ni buffering
🌍 Miles de canales internacionales
🎬 Películas y series actualizadas
📱 Funciona en cualquier dispositivo
⚡ Activación inmediata tras el pago
🛡️ Soporte técnico disponible 24/7

_¿Listo para empezar?_ 👇

*DEMO1* → Prueba 1 hora gratis
*DEMO3* → Prueba 3 horas gratis
*1* → Ver planes y precios
*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `🎯 *¿Qué hace especial nuestro servicio?*

• Calidad de imagen: HD, FHD y 4K
• Sin interrupciones ni cortes
• Catálogo completo: canales, películas y series
• Funciona en TV, celular, tablet y computadora
• Varios dispositivos al mismo tiempo
• Activación en minutos
• Atención al cliente las 24 horas

_Pruébalo tú mismo:_

*DEMO1* → 1 hora de demo gratuita
*DEMO3* → 3 horas de demo gratuita
*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `✅ *Nuestro servicio incluye todo esto:*

📶 Streaming estable sin cortes
🎥 Resolución HD, FHD y hasta 4K
📺 Miles de canales, series y películas
🔗 Compatible con cualquier app o dispositivo
🔄 Varios dispositivos al mismo tiempo
⚡ Tu cuenta se activa al instante
📞 Soporte 24/7 si necesitas ayuda

_¿Quieres probarlo antes de pagar?_

*DEMO1* → Demo gratuita 1 hora
*DEMO3* → Demo gratuita 3 horas
*1* → Ver planes disponibles
*MENU* → Inicio`,
    }],
    [{
      tipo: "text", contenido: `🏆 *Nuestro servicio — Lo que debes saber*

━━━━━━━━━━━━━━━━━━━━
✔ Sin buffering ni interrupciones
✔ HD, FHD y 4K disponibles
✔ Canales, series y películas
✔ Cualquier dispositivo y sistema operativo
✔ Múltiples conexiones simultáneas
✔ Activación inmediata
✔ Soporte técnico 24/7
━━━━━━━━━━━━━━━━━━━━

🎁 *Prueba antes de contratar:*
*DEMO1* → 1 hora gratis
*DEMO3* → 3 horas gratis
*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `💬 *Razones para elegirnos:*

1️⃣ Imagen HD, FHD y 4K nítida
2️⃣ Transmisión sin cortes ni lag
3️⃣ Canales en vivo + series + películas
4️⃣ Compatible con Smart TV, celular, tablet y PC
5️⃣ Múltiples dispositivos simultáneos
6️⃣ Acceso inmediato tras el pago
7️⃣ Soporte disponible 24 horas al día

_¿Aún dudas? Pruébalo gratis sin compromiso:_

*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas
*MENU* → Menú principal`,
    }],
  ];
}

function _variantesDemo(): RespuestaMedia[][] {
  return [
    [{
      tipo: "text", contenido: `🎁 *Prueba {{EMPRESA}} GRATIS*

Puedes probar nuestro servicio sin costo. Elige la duración de tu demo:

*DEMO1* → Prueba de *1 hora* (completa)
*DEMO3* → Prueba de *3 horas* (completa)

_Solo escribe la opción y ¡listo! Recibirás tus credenciales al instante._ ⚡

*MENU* → Volver al menú principal`,
    }],
    [{
      tipo: "text", contenido: `🎯 *Demo gratuita — {{EMPRESA}}*

Sin costo, sin compromiso. Prueba el servicio ahora mismo:

*DEMO1* → 1 hora de prueba completa
*DEMO3* → 3 horas de prueba completa

_Escribe la opción y en segundos tendrás tus credenciales._ ⚡

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `✅ *¡Prueba {{EMPRESA}} sin pagar nada!*

Elige cuánto tiempo quieres probar:

*DEMO1* → Prueba 1 hora gratis
*DEMO3* → Prueba 3 horas gratis

_Responde con la opción y recibirás el acceso de inmediato._ 🚀

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `🆓 *¡Acceso de prueba sin costo!*

Antes de contratar, verifica la calidad del servicio.

▶️ *DEMO1* → 1 hora de acceso completo
▶️ *DEMO3* → 3 horas de acceso completo

_Responde con el comando y te enviamos tus credenciales al instante_ ⚡

*MENU* → Volver al menú principal`,
    }],
    [{
      tipo: "text", contenido: `👀 *Antes de contratar, prueba gratis*

Elige la duración de tu acceso de prueba:

🕐 *DEMO1* → Una hora completa
🕒 *DEMO3* → Tres horas completas

_Escribe el comando y te enviamos acceso inmediatamente_

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `📲 *Demo sin costo — {{EMPRESA}}*

¿Quieres ver la calidad antes de pagar? ¡Perfecto!

━━━━━━━━━━━━━━
*DEMO1* → Prueba 1 hora
*DEMO3* → Prueba 3 horas
━━━━━━━━━━━━━━

_Solo escribe la opción y te mandamos el acceso_ ✅

*MENU* → Inicio`,
    }],
    [{
      tipo: "text", contenido: `🎬 *Prueba gratis antes de contratar*

No necesitas pagar para comprobar la calidad de {{EMPRESA}}.

Elige tu duración de prueba:

• *DEMO1* → 1 hora de acceso
• *DEMO3* → 3 horas de acceso

_Recibirás tus credenciales de inmediato_ ⚡

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `🎁 *Demo gratuita disponible*

Escribe el comando que prefieras y en segundos recibes acceso:

*DEMO1* → 🕐 1 hora gratis
*DEMO3* → 🕒 3 horas gratis

_Sin registros, sin tarjeta, sin compromiso_ ✨

*MENU* → Menú principal`,
    }],
  ];
}

function _variantesInstalacion(): RespuestaMedia[][] {
  return [
    [{
      tipo: "text", contenido: `📹 *Guías de Instalación {{EMPRESA}}*

Selecciona tu dispositivo:

*41* → 📺 Smart TV (LG / Samsung)
*42* → 📦 Android TV Box / Android TV / TV Stick / Google TV
*43* → 📱 Celular o Tablet Android
*44* → 🍎 iPhone / iPad / Mac / MacBook
*45* → 💻 PC / Windows
*46* → 🌐 Instalar por Navegador (alternativa Android)

*MENU* → Volver al menú principal`,
    }],
    [{
      tipo: "text", contenido: `📲 *¿En qué dispositivo vas a usar el servicio?*

Elige el tuyo para ver la guía de instalación:

📺 *41* → Smart TV (LG / Samsung)
📦 *42* → Android TV Box / TV Stick / Google TV
📱 *43* → Celular o Tablet Android
🍎 *44* → iPhone / iPad / Mac / MacBook
💻 *45* → PC o Laptop Windows
🌐 *46* → Navegador web (Android alternativo)

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `🔧 *Instalación paso a paso — {{EMPRESA}}*

Dinos en qué equipo lo vas a usar:

*41* → Smart TV
*42* → TV Box / TV Stick / Android TV
*43* → Celular Android o Tablet
*44* → iPhone, iPad o Mac
*45* → Computadora Windows
*46* → Navegador (si falla el TV Box)

_Escribe el número de tu dispositivo_ 👇

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `📥 *Tutorial de instalación — {{EMPRESA}}*

Selecciona tu tipo de dispositivo:

• *41* → 📺 Smart TV
• *42* → 📦 TV Box / Android TV / Stick
• *43* → 📱 Android (celular o tablet)
• *44* → 🍎 Apple (iPhone, iPad, Mac)
• *45* → 💻 Windows
• *46* → 🌐 Navegador web

*MENU* → Inicio`,
    }],
    [{
      tipo: "text", contenido: `🖥️ *Instalación del servicio*

¿En qué dispositivo lo vas a usar?

━━━━━━━━━━━━━━
*41* → Smart TV (LG / Samsung)
*42* → Android TV / TV Box / Stick
*43* → Celular o Tablet Android
*44* → iPhone / iPad / Mac
*45* → PC / Windows
*46* → Por Navegador (alternativa)
━━━━━━━━━━━━━━

_Responde con el número_ ✍️

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `📡 *Instala {{EMPRESA}} en tu dispositivo*

Elige el tuyo y te enviamos la guía completa:

🖥️ *41* → Smart TV (LG o Samsung)
📦 *42* → TV Box / Android TV / Fire Stick
📱 *43* → Celular o Tablet Android
🍎 *44* → iPhone, iPad, Mac o MacBook
💻 *45* → Computadora Windows
🌐 *46* → Instalación por Navegador

_Escribe el número de tu dispositivo_ 👇

*MENU* → Menú principal`,
    }],
    [{
      tipo: "text", contenido: `🔧 *¿En qué equipo lo vas a usar?*

Te enviamos el tutorial exacto para tu dispositivo:

*41* → 📺 Smart TV LG / Samsung
*42* → 📦 Android TV Box / TV Stick / Google TV
*43* → 📱 Celular o Tablet Android
*44* → 🍎 iPhone / iPad / Mac
*45* → 💻 PC o Laptop Windows
*46* → 🌐 Navegador (opción alternativa)

_Solo escribe el número_ ✅

*MENU* → Inicio`,
    }],
    [{
      tipo: "text", contenido: `📲 *Selecciona tu dispositivo para ver la guía*

▶️ *41* → Smart TV (LG / Samsung)
▶️ *42* → TV Box / Android TV / Stick
▶️ *43* → Android (celular o tablet)
▶️ *44* → Apple (iPhone / iPad / Mac)
▶️ *45* → Windows
▶️ *46* → Navegador web

_Escribe el número y te mandamos el tutorial paso a paso_ 📩

*MENU* → Menú principal`,
    }],
  ];
}

function _variantesConfirmacionPlan(
  descripcion: string,
  monto: string,
  extra?: string,
): RespuestaMedia[][] {
  const bonus = extra ? ` ${extra}` : "";
  return [
    [{
      tipo: "text", contenido: `✅ *Plan Seleccionado: ${descripcion}*
💰 ${monto}${bonus}

Para completar tu activación:
1️⃣ Realiza tu pago de *${monto}* por Yape o QR
2️⃣ Cuando termines, escribe *COMPROBAR*
3️⃣ El bot te pedirá tu nombre y el monto exacto
4️⃣ ¡Recibirás tus credenciales al instante!

⚠️ _El nombre debe ser exactamente como aparece en tu comprobante_

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    }],
    [{
      tipo: "text", contenido: `🎯 *${descripcion}*
💰 ${monto}${bonus}

Pasos para activar:
• Paga *${monto}* por Yape o QR
• Escribe *COMPROBAR* al finalizar
• Dinos tu nombre y el monto pagado
• Recibes tus credenciales de inmediato ⚡

_El nombre debe coincidir exactamente con tu comprobante_

*COMPROBAR* → Ya pagué
*1* → Cambiar plan`,
    }],
    [{
      tipo: "text", contenido: `📋 *Confirmación — ${descripcion}*

Monto a pagar: *${monto}*${bonus}

─────────────────────
1. Realiza el pago de *${monto}* vía Yape o QR
2. Escribe *COMPROBAR*
3. Indica tu nombre (como en el comprobante) y el monto
4. Recibe tu acceso al instante 🚀
─────────────────────

*COMPROBAR* → Validar pago
*1* → Menú de planes`,
    }],
    [{
      tipo: "text", contenido: `🎉 *¡Excelente elección!*

📦 *Plan:* ${descripcion}
💰 *Precio:* ${monto}${bonus}

─────────────────────
¿Cómo proceder?
1. Realiza el pago de *${monto}* (Yape o QR)
2. Envía *COMPROBAR*
3. Dinos tu nombre exacto del comprobante y el monto
4. Recibe tus credenciales al instante ✅
─────────────────────

*COMPROBAR* → Confirmar pago
*1* → Ver otros planes`,
    }],
    [{
      tipo: "text", contenido: `💳 *Resumen de tu selección*

Plan elegido: *${descripcion}*
Total a pagar: *${monto}*${bonus}

Cuando realices el pago, escribe *COMPROBAR* y te pediremos:
• Tu nombre (igual al comprobante)
• El monto pagado

_Recibirás tus datos de acceso al instante_ 🚀

*COMPROBAR* → Ya realicé el pago
*1* → Elegir otro plan`,
    }],
    [{
      tipo: "text", contenido: `✅ *Seleccionado: ${descripcion}*

Monto: *${monto}*${bonus}

══════════════════════
Para activar tu cuenta:
→ Paga *${monto}* por Yape o QR
→ Escribe *COMPROBAR*
→ Indica nombre y monto del comprobante
→ ¡Acceso inmediato! ⚡
══════════════════════

*COMPROBAR* → Confirmar mi pago
*1* → Volver al menú`,
    }],
    [{
      tipo: "text", contenido: `🛒 *Tu plan seleccionado:*

📋 ${descripcion}
💵 ${monto}${bonus}

─────────────────────
Próximos pasos:
✔ Paga *${monto}* vía Yape o QR
✔ Escribe *COMPROBAR*
✔ Comparte tu nombre y el monto exacto
✔ Obtén tus credenciales en segundos ⚡
─────────────────────

*COMPROBAR* → Listo, ya pagué
*1* → Cambiar de plan`,
    }],
  ];
}

export const VARIANTES_RESPUESTAS: Record<string, RespuestaMedia[][]> = {
  "1": _variantesSeleccionDispositivos(),
  "2": _variantesCaracteristicas(),
  "3": _variantesDemo(),
  "4": _variantesInstalacion(),
  PLANES: _variantesSeleccionDispositivos(),
  PLAN: _variantesSeleccionDispositivos(),
  CONTRATAR: _variantesSeleccionDispositivos(),
  "QUIERO CONTRATAR": _variantesSeleccionDispositivos(),
  P1: _variantesConfirmacionPlan("Un Dispositivo - 1 Mes", "Bs 29"),
  P2: _variantesConfirmacionPlan("Un Dispositivo - 3 Meses", "Bs 82"),
  P3: _variantesConfirmacionPlan("Un Dispositivo - 6 Meses", "Bs 155", "🎁 +1 mes gratis (Total: 7 meses)"),
  P4: _variantesConfirmacionPlan("Un Dispositivo - 12 Meses", "Bs 300", "🎁 +2 meses gratis (Total: 14 meses)"),
  Q1: _variantesConfirmacionPlan("Dos Dispositivos - 1 Mes", "Bs 35"),
  Q2: _variantesConfirmacionPlan("Dos Dispositivos - 3 Meses", "Bs 100"),
  Q3: _variantesConfirmacionPlan("Dos Dispositivos - 6 Meses", "Bs 190", "🎁 +1 mes gratis (Total: 7 meses)"),
  Q4: _variantesConfirmacionPlan("Dos Dispositivos - 12 Meses", "Bs 380", "🎁 +2 meses gratis (Total: 14 meses)"),
  R1: _variantesConfirmacionPlan("Tres Dispositivos - 1 Mes", "Bs 40"),
  R2: _variantesConfirmacionPlan("Tres Dispositivos - 3 Meses", "Bs 115"),
  R3: _variantesConfirmacionPlan("Tres Dispositivos - 6 Meses", "Bs 225", "🎁 +1 mes gratis (Total: 7 meses)"),
  R4: _variantesConfirmacionPlan("Tres Dispositivos - 12 Meses", "Bs 440", "🎁 +2 meses gratis (Total: 14 meses)"),
};

export function obtenerRespuesta(cmd: string): RespuestaMedia[] | null {
  const variantes = VARIANTES_RESPUESTAS[cmd];
  if (variantes && variantes.length > 0) return elegirVariante(variantes);
  return RESPUESTAS_NUMEROS[cmd] ?? null;
}

// ═══════════════════════════════════════════════════════════
// RESPUESTA POR DEFECTO — eliminada para evitar detección de bot
// Los mensajes desconocidos se ignoran silenciosamente
// ═══════════════════════════════════════════════════════════
export const RESPUESTA_DESCONOCIDA = "";

// ═══════════════════════════════════════════════════════════
// RESPUESTA AL ACTIVAR LA CUENTA
// ═══════════════════════════════════════════════════════════
export const ACTIVACION_EXITOSA = (datos: {
  usuario: string;
  contrasena: string;
  plan?: string;
  servidor?: string;
}) => {
  const srv = datos.servidor || "http://mtv.bo:80";
  const plan = datos.plan || "Plan Activo";
  const variantes = [
    `🎉 *¡Tu cuenta está ACTIVA!*

🎬 *Bienvenido a {{EMPRESA}}*

🔐 *Credenciales de acceso:*
📛 Nombre: \`mastv\`
👤 Usuario: \`${datos.usuario}\`
🔑 Contraseña: \`${datos.contrasena}\`
🌐 URL: \`${srv}\`

📺 *Plan contratado:* ${plan}

_Puedes acceder desde la web, Smart TV o app mobile_

*MENU* → Volver al menú principal`,

    `✅ *¡Activación completada!*

Tu acceso a {{EMPRESA}} está listo 🎬

─────────────────────
📛 Perfil: \`mastv\`
👤 Usuario: \`${datos.usuario}\`
🔑 Contraseña: \`${datos.contrasena}\`
🌐 Servidor: \`${srv}\`
─────────────────────

📋 Plan: ${plan}

_Disfruta el servicio desde cualquier dispositivo_

*MENU* → Menú principal`,

    `🚀 *¡Bienvenido a {{EMPRESA}}!*

Tu cuenta ha sido activada con éxito 🎉

━━━━━━━━━━━━━━━━━━━━
📛 Perfil: \`mastv\`
👤 Usuario: \`${datos.usuario}\`
🔑 Contraseña: \`${datos.contrasena}\`
🌐 URL: \`${srv}\`
━━━━━━━━━━━━━━━━━━━━

Plan activo: ${plan}

_Puedes entrar desde Smart TV, celular, tablet o PC_ 📺

*MENU* → Menú principal`,

    `🎊 *¡Todo listo! Tu servicio está activo*

{{EMPRESA}} te da la bienvenida 📺

══════════════════════
📛 Perfil: \`mastv\`
👤 Usuario: \`${datos.usuario}\`
🔑 Contraseña: \`${datos.contrasena}\`
🌐 Servidor: \`${srv}\`
══════════════════════

📦 Plan: ${plan}

_Abre tu app favorita e ingresa con estos datos_ ✅

*MENU* → Menú principal`,

    `✨ *¡Cuenta creada y lista para usar!*

Aquí están tus datos de acceso a {{EMPRESA}}:

👤 *Usuario:* \`${datos.usuario}\`
🔑 *Contraseña:* \`${datos.contrasena}\`
🌐 *URL:* \`${srv}\`
📛 *Perfil:* \`mastv\`

📋 *Tu plan:* ${plan}

_Disfruta sin interrupciones desde cualquier dispositivo_ 🎬

*MENU* → Inicio`,

    `🔓 *Acceso activado — {{EMPRESA}}*

Ya puedes disfrutar del servicio 🎉

─────────────────────
📛 Nombre de perfil: \`mastv\`
👤 Usuario: \`${datos.usuario}\`
🔑 Contraseña: \`${datos.contrasena}\`
🌐 URL del servidor: \`${srv}\`
─────────────────────

Plan contratado: *${plan}*

_Si necesitas ayuda para configurar la app, escribe *4* para ver las guías de instalación_

*4* → Guías de instalación
*MENU* → Menú principal`,

    `📺 *¡Ya eres parte de {{EMPRESA}}!*

Tu cuenta está activada y lista 🚀

━━━━━━━━━━━━━━━━━━━━
👤 Usuario: \`${datos.usuario}\`
🔑 Contraseña: \`${datos.contrasena}\`
🌐 Servidor: \`${srv}\`
📛 Perfil: \`mastv\`
━━━━━━━━━━━━━━━━━━━━

📦 Plan activo: ${plan}

_Recuerda guardar tus credenciales en un lugar seguro_ 🔒

*4* → Ver guías de instalación
*MENU* → Menú principal`,

    `🏆 *¡Bienvenido al mejor IPTV de Bolivia!*

Tu acceso a {{EMPRESA}} ya está disponible:

📋 *Tus credenciales:*
📛 Perfil → \`mastv\`
👤 Usuario → \`${datos.usuario}\`
🔑 Contraseña → \`${datos.contrasena}\`
🌐 URL → \`${srv}\`

🎯 Plan activo: *${plan}*

_¿Primera vez? Escribe *4* y te mostramos cómo instalar la app en tu dispositivo_ 👇

*4* → Guías de instalación
*MENU* → Menú principal`,
  ];
  return elegirVariante(variantes);
};

// ═══════════════════════════════════════════════════════════
// COMANDOS ESPECIALES
// ═══════════════════════════════════════════════════════════
export const COMANDOS_ESPECIALES: Record<string, RespuestaMedia[]> = {
  AYUDA: [
    {
      tipo: "text",
      contenido: `📋 *Comandos disponibles:*

*Menú Principal:*
*1* → Ver planes
*2* → Características
*3* → Probar gratis
*4* → Guías de instalación
*5* → Hablar personalmente

*Seleccionar dispositivos:*
*P* → Un dispositivo
*Q* → Dos dispositivos
*R* → Tres dispositivos

*Planes (Un dispositivo):*
*P1, P2, P3, P4*

*Planes (Dos dispositivos):*
*Q1, Q2, Q3, Q4*

*Planes (Tres dispositivos):*
*R1, R2, R3, R4*

*Demos gratuitas:*
*DEMO1* → Demo de 1 hora
*DEMO3* → Demo de 3 horas

*Otros:*
*HOLA / MENU* → Volver al inicio
*AYUDA* → Ver esto
*ESTADO* → Ver mi cuenta`,
    },
  ],

  ESTADO: [
    {
      tipo: "text",
      contenido: `📊 *Estado de tu Cuenta*

Tu cuenta está en el sistema.

_Para activarla necesitas:_
💰 Realizar un pago
✅ Recibir validación automática
🔓 Obtener credenciales

_Una vez realizado el pago, escribe:_ *COMPROBAR*

*MENU* → Volver al menú principal`,
    },
  ],

  HOLA: [
    {
      tipo: "text",
      contenido: SALUDO_INICIAL,
    },
  ],

  MENU: [
    {
      tipo: "text",
      contenido: SALUDO_INICIAL,
    },
  ],

  // ═══════════════════════════════════════════════════════════
  // SOPORTE TÉCNICO - ERRORES COMUNES
  // ═══════════════════════════════════════════════════════════
  ERRORES: [
    {
      tipo: "text",
      contenido: `🔧 *Errores Comunes - Soporte Técnico*

Selecciona el problema que estás teniendo:

*ERR1* → 📶 La transmisión se corta o va lenta

_Se irán agregando más soluciones pronto._

─────────────────────
*MENU* → Volver al menú principal`,
    },
  ],

  ERR1: [
    {
      tipo: "text",
      contenido: `📶 *La transmisión se corta o va lenta*

Esto suele ocurrir por la velocidad de tu internet.

✅ La velocidad mínima recomendada es de *15 Mbps*.

🌐 Puedes revisar tu velocidad en:
*www.fast.com*

─────────────────────
💡 *Si tu internet supera los 15 Mbps y el problema persiste*, contáctanos directamente:

📞 *+591 69741630*
💬 WhatsApp: *+591 69741630*
🕐 Atención 24/7

─────────────────────
*ERRORES* → Ver más errores comunes
*MENU* → Volver al menú principal`,
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PALABRAS CLAVE PARA SALUDOS
// ═══════════════════════════════════════════════════════════
export const PALABRAS_SALUDO = [
  "HOLA",
  "HI",
  "BUENOS",
  "BUENOS DÍAS",
  "BUENOS DÍAs",
  "BUENOS DIAS",
  "BUENAS",
  "BUENAS NOCHES",
  "BUENAS TARDES",
  "BUENA NOCHE",
  "BUENA TARDE",
  "BUEN DÍA",
  "BUEN DIA",
  "HOLA BUENOS",
  "INICIO",
  "START",
  "HELP",
  "INFORMACIÓN",
  "INFORMACION",
  "QUIERO INFORMACIÓN",
  "QUIERO INFORMACION",
  "MÁS INFORMACIÓN",
  "MAS INFORMACION",
  "DAME INFO",
  "¿CUÁLES SON LOS PLANES?",
  "CUALES SON LOS PLANES",
  "QUE OFRECES",
  "QUE PLANES TIENES",
  "PLANES",
  "CONTRATAR",
  "QUIERO CONTRATAR",
  "QUIERO SUSCRIBIRME",
  "SUSCRIPCIÓN",
  "SUSCRIPCION",
  "SUBSCRIBE",
  "PRECIO",
  "PRECIOS",
  "COSTO",
  "CUÁNTO CUESTA",
  "CUANTO CUESTA",
  "VALOR",
  "🤖",
];

/**
 * Reemplaza las variables {{variable}} en un mensaje con valores reales.
 */
export function formatearMensaje(
  plantilla: string,
  vars: Record<string, string | undefined>,
): string {
  return plantilla.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? "");
}
