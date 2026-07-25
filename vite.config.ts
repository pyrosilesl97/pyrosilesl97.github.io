import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site (pyrosilesl97.github.io) is served from the domain root, so base = '/'.
// If this were a project page, base would need to be '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
