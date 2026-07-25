/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TT_SITEKEY?: string;
  readonly VITE_CONTACT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
