// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://improwised.github.io',
    base: '/improwised-new-website/newapp', // Subdirectory path
    outDir: 'dist', // Default output directory
});
