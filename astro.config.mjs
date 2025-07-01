
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://maciejj1.github.io', // <--- Ustaw tu swój adres strony
  base: '/dgklogistics', // <--- Ustaw bazowy URL, jeśli jest inny
  integrations: [tailwind()],
  redirects: {
    "/": "/nl"
  },
  i18n: {
    locales: ["nl", "pl", "de", "en"], // Locales you want to support
    defaultLocale: "nl", // Default locale (fallback)
    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },
});
