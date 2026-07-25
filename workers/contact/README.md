# portfolio-contact (Cloudflare Worker)

Backend del formulario: verifica Cloudflare Turnstile y reenvía el mensaje a tu bot de Telegram.

GitHub Pages es estático, así que **los secretos no pueden vivir en el frontend**. Solo la *site key* de Turnstile es pública; el resto va aquí.

## Variables

| Nombre | Dónde | Secreto | Descripción |
| --- | --- | --- | --- |
| `TT_SITEKEY` / `VITE_TT_SITEKEY` | GitHub Actions + `.env` local | no | Site key de Turnstile (widget) |
| `CONTACT_API_URL` / `VITE_CONTACT_API_URL` | GitHub Actions + `.env` local | no | URL del Worker, p. ej. `https://portfolio-contact.<tu-subdominio>.workers.dev` |
| `TT_SECRET_KEY` | Cloudflare Worker secret | **sí** | Secret key de Turnstile |
| `BOT_ID` | Cloudflare Worker secret | **sí** | Token del bot de Telegram (`123456:ABC…`) |
| `CHAT_ID` | Cloudflare Worker secret | **sí** | ID del chat donde llegan los mensajes |
| `ALLOWED_ORIGINS` | Cloudflare Worker var (opcional) | no | Orígenes permitidos, separados por coma |

## 1. Turnstile

1. En [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) crea un widget.
2. Hostnames: `pyrosilesl97.github.io` y `localhost` (para desarrollo).
3. Copia la **Site Key** (`TT_SITEKEY`) y la **Secret Key** (`TT_SECRET_KEY`).

## 2. Bot de Telegram

1. Habla con [@BotFather](https://t.me/BotFather), crea un bot y copia el token → `BOT_ID`.
2. Escríbele un mensaje al bot (o añádelo a un grupo).
3. Abre `https://api.telegram.org/bot<BOT_ID>/getUpdates` y lee el `chat.id` → `CHAT_ID`.

## 3. Desplegar el Worker

```bash
cd workers/contact
npx wrangler login
npx wrangler secret put TT_SECRET_KEY
npx wrangler secret put BOT_ID
npx wrangler secret put CHAT_ID
npx wrangler deploy
```

Opcional, después del primer deploy:

```bash
npx wrangler secret put ALLOWED_ORIGINS
# valor ejemplo: https://pyrosilesl97.github.io,http://localhost:5173
```

(`ALLOWED_ORIGINS` también puede ir como `[vars]` en `wrangler.toml` si prefieres.)

Anota la URL que imprime Wrangler; esa es tu `CONTACT_API_URL`.

## 4. Conectar el sitio (GitHub Pages)

En el repo → **Settings → Secrets and variables → Actions**, crea:

- `TT_SITEKEY`
- `CONTACT_API_URL`

El workflow de deploy las inyecta como `VITE_*` en el build.

Para desarrollo local, copia `.env.example` a `.env`:

```
VITE_TT_SITEKEY=...
VITE_CONTACT_API_URL=https://portfolio-contact.<subdominio>.workers.dev
```
