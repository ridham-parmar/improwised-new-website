// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ridham.github.io',
    
  redirects: {
    "/sitemap.xml" : "/sitemap-index.xml"
  },

  // Subdirectory path
  base: '/github-pages',

  // Default output directory
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [svelte(), mdx(), sitemap()],
  
  // server: {
  //   host: true,
  //   port: 4321
  // }
});
