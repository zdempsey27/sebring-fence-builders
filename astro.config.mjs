import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://odessafencebuilders.com', // UPDATE THIS to your actual domain
  integrations: [sitemap()],
});
