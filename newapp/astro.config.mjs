// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.improwised.com',

  // Subdirectory path
  // base: '/improwised-new-website/newapp',

  // Default output directory
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [svelte(), mdx()],
  
  // server: {
  //   host: true,
  //   port: 4321
  // }
});
