
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://maciejj1.github.io', // <--- Ustaw tu swój adres strony
  base: '/dgklogistics-preview', // <--- Ustaw bazowy URL, jeśli jest inny
  integrations: [tailwind()],
  redirects: {
    '/dgklogistics-preview/': '/dgklogistics-preview/nl',
    '/': '/dgklogistics-preview/nl', // Redirect root to the Dutch version
  },
  i18n: {
    locales: ["nl", "pl", "de", "en"], // Locales you want to support
    defaultLocale: "nl", // Default locale (fallback)
    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },
});
