// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://improwised.github.io',
  base: 'improwised-new-website',
  integrations: [svelte(), tailwind({
    applyBaseStyles: false,
  }), mdx()]
});