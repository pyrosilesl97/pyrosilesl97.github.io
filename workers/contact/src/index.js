/**
 * Contact API for the portfolio.
 *
 * POST JSON: { name, email, message, turnstileToken }
 * Env secrets: TT_SECRET_KEY, BOT_ID, CHAT_ID
 * Optional var: ALLOWED_ORIGINS (comma-separated)
 */

const TURNSTILE_VERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 4000;

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return cors(request, env, new Response(null, { status: 204 }));
    }

    if (request.method !== 'POST') {
      return cors(request, env, json({ error: 'method_not_allowed' }, 405));
    }

    if (!originAllowed(request, env)) {
      return cors(request, env, json({ error: 'forbidden' }, 403));
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return cors(request, env, json({ error: 'invalid_json' }, 400));
    }

    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const message = String(body?.message ?? '').trim();
    const turnstileToken = String(body?.turnstileToken ?? '').trim();
    // Honeypot: real users leave this empty.
    const company = String(body?.company ?? '').trim();

    if (company) {
      return cors(request, env, json({ ok: true }, 200));
    }

    if (!name || !email || !message || !turnstileToken) {
      return cors(request, env, json({ error: 'missing_fields' }, 400));
    }

    if (
      name.length > MAX_NAME ||
      email.length > MAX_EMAIL ||
      message.length > MAX_MESSAGE ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return cors(request, env, json({ error: 'invalid_fields' }, 400));
    }

    if (!env.TT_SECRET_KEY || !env.BOT_ID || !env.CHAT_ID) {
      return cors(request, env, json({ error: 'server_misconfigured' }, 500));
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? '';
    const verified = await verifyTurnstile(env.TT_SECRET_KEY, turnstileToken, ip);
    if (!verified) {
      return cors(request, env, json({ error: 'turnstile_failed' }, 403));
    }

    const text = [
      '📬 Nuevo mensaje del portafolio',
      '',
      `Nombre: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    const tg = await fetch(`https://api.telegram.org/bot${env.BOT_ID}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.CHAT_ID,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!tg.ok) {
      return cors(request, env, json({ error: 'telegram_failed' }, 502));
    }

    return cors(request, env, json({ ok: true }, 200));
  },
};

async function verifyTurnstile(secret, token, ip) {
  const form = new URLSearchParams();
  form.set('secret', secret);
  form.set('response', token);
  if (ip) form.set('remoteip', ip);

  const res = await fetch(TURNSTILE_VERIFY, {
    method: 'POST',
    body: form,
  });

  if (!res.ok) return false;
  const data = await res.json();
  return Boolean(data.success);
}

function originAllowed(request, env) {
  const allowed = String(env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (allowed.length === 0) return true;

  const origin = request.headers.get('Origin') ?? '';
  return allowed.includes(origin);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function cors(request, env, response) {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = String(env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const headers = new Headers(response.headers);
  if (allowed.length === 0 || allowed.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin || '*');
    headers.set('Vary', 'Origin');
  }
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');
  headers.set('Access-Control-Max-Age', '86400');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
