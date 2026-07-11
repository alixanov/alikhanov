const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;

// Best-effort only: serverless instances are ephemeral, so this map doesn't
// persist across cold starts or scale-out, but it still blocks simple bots
// that hammer a warm instance.
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so
  // bots don't learn their submission was rejected.
  if (body.company) {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const locale = body.locale;

  if (!name || !message) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return Response.json({ ok: false, error: "invalid_length" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const text = [
    "New inquiry from alikhanov.uz",
    `Name: ${name}`,
    `Email: ${email || "-"}`,
    `Locale: ${locale || "-"}`,
    "",
    message,
  ].join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!telegramResponse.ok) {
    return Response.json({ ok: false, error: "telegram_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
