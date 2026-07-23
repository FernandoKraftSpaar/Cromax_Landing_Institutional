import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Em GitHub Pages (project site) o app é servido em /<repo>/.
// A env GITHUB_PAGES é definida pelo workflow de deploy do Pages.
// Em Azure SWA / local o base permanece "/".
const base = process.env.GITHUB_PAGES ? '/Cromax_Landing_Institutional/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Cromax_Landing_Institutional/',
  plugins: [react()],
})
