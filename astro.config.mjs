// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://penzyworks.github.io',
  base: '/hair-salon-lumiere',
  vite: {
    build: {
      cssMinify: false,
    },
  },
});