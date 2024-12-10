// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://improwised.github.io',
  base: 'improwised-new-website',
  integrations: [svelte()]
});