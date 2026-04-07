const PING_INTERVAL_MS = 5 * 60 * 1000; // 5 minutos

export function startKeepalive() {
  const domain = process.env["REPLIT_DEV_DOMAIN"];

  if (!domain) {
    console.log("⚠️  [KEEPALIVE] No se encontró REPLIT_DEV_DOMAIN, keepalive desactivado.");
    return;
  }

  const url = `https://${domain}/api/healthz`;

  const ping = async () => {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
      const ts = new Date().toLocaleTimeString("es-BO");
      if (res.ok) {
        console.log(`🏓 [KEEPALIVE] ${ts} — Ping OK (${res.status}) → ${url}`);
      } else {
        console.warn(`⚠️  [KEEPALIVE] ${ts} — Ping ${res.status} → ${url}`);
      }
    } catch (err: any) {
      console.error(`❌ [KEEPALIVE] Ping falló → ${url}:`, err.message);
    }
  };

  // Primer ping al minuto de arrancar
  setTimeout(ping, 60_000);

  // Luego cada 5 minutos
  setInterval(ping, PING_INTERVAL_MS);

  console.log(`🏓 [KEEPALIVE] Auto-ping activado cada 5 min → ${url}`);
}
