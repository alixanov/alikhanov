export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.message) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const { name, email, message, locale } = body;
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
