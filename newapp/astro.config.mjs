// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://improwised.github.io',

  // Subdirectory path
  base: '/improwised-new-website/newapp',

  // Default output directory
  outDir: 'dist',

  integrations: [svelte(), tailwind({
    applyBaseStyles: false,
  }), mdx()]
});