// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  compressHTML: true, // ✅ active la minification HTML + JS inline
  site: 'https://casabmb.github.io',
  base: '/mydev/'
});
