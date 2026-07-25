# pyrosilesl97.github.io

Sitio personal y CV de Pablo Yamild Rosiles Loeza, construido con **React + TypeScript + Vite** y desplegado en **GitHub Pages**. El diseño reutiliza la identidad visual de [catnest-tech.com](https://catnest-tech.com): azul `#063E81` / `#4598E8`, tipografías Poppins y Space Grotesk, superficies oscuras y tarjetas con hover.

## Puesta en marcha

```bash
npm install
```

```bash
npm run dev
```

Otros comandos: `npm run build` genera `dist/`, `npm run preview` sirve ese build, y `npm run typecheck` corre solo TypeScript.

## Despliegue en GitHub Pages

El workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) compila y publica en cada push a `master`. **Requiere un ajuste único**: en el repositorio, ve a `Settings → Pages` y en *Build and deployment → Source* elige **GitHub Actions** (en lugar de *Deploy from a branch*). Sin ese cambio el sitio seguiría sirviendo los archivos del branch y no el build.

El workflow también copia `legacy/` dentro de `dist/`, así que el CV antiguo en HTML plano sigue disponible en `/legacy/cv-2026-legacy.html`.

`vite.config.ts` usa `base: '/'` porque este es un *user site* servido desde la raíz del dominio. Si algún día mueves el proyecto a un repositorio normal, cámbialo a `/nombre-del-repo/`.

## Formulario de contacto (Turnstile → Telegram)

GitHub Pages solo sirve archivos estáticos: **no puede guardar secretos**. El flujo es:

1. El visitante completa el formulario y resuelve Turnstile (solo la *site key* vive en el frontend).
2. Un **Cloudflare Worker** verifica el *secret*, y manda el mensaje a tu bot de Telegram.

Instrucciones detalladas: [workers/contact/README.md](workers/contact/README.md).

Resumen de variables:

| Secret / var | Dónde | Contenido |
| --- | --- | --- |
| `TT_SITEKEY` | GitHub Actions | Site key pública de Turnstile |
| `CONTACT_API_URL` | GitHub Actions | URL del Worker |
| `TT_SECRET_KEY` | Cloudflare Worker | Secret key de Turnstile |
| `BOT_ID` | Cloudflare Worker | Token del bot de Telegram |
| `CHAT_ID` | Cloudflare Worker | ID del chat de destino |

## Estructura

```
src/
  data/profile.ts     Datos independientes del idioma: links, DOIs, fechas ISO, stacks
  i18n/               en · es · de · ja · zh, tipados contra i18n/types.ts
  hooks/              idioma, tema claro/oscuro, reveal al hacer scroll, sección activa
  components/         Header, Hero, About, Skills, Experience, Projects, Research…
  styles/index.css    Tokens de diseño y todos los componentes
public/               Imágenes servidas tal cual (logo, retrato, iconos)
legacy/               CV anterior en HTML plano, conservado como respaldo
```

### Cómo editar el contenido

- **Un dato que es igual en todos los idiomas** (una URL, un DOI, una fecha, un chip de tecnología) va en `src/data/profile.ts` y solo se escribe una vez.
- **Texto traducible** va en los cinco archivos de `src/i18n/`. La interfaz `Translation` obliga a que ninguno quede incompleto: si agregas un campo, TypeScript marca error en los idiomas que falten.
- Los periodos de trabajo se guardan como `YYYY-MM` y se formatean con `Intl.DateTimeFormat` según el idioma, así que "March 2026 — Present" y "2026年3月 — 現在" salen del mismo dato.

## Idiomas

Cinco idiomas: inglés, español, alemán, japonés y chino. La selección se resuelve en este orden: parámetro `?lang=es` en la URL → elección guardada en `localStorage` → idioma del navegador → inglés.

## Notas

- Tema claro y oscuro; se aplica antes del primer pintado con un script en `index.html` para que no haya parpadeo.
- Contraste verificado por encima de 4.5:1 en ambos temas.
- Respeta `prefers-reduced-motion`: sin animaciones de entrada ni scroll suave.
- Hay estilos de impresión, así que la página se puede guardar como PDF decente desde el navegador.
