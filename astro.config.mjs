import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import astroI18next from 'astro-i18next';
import purgecss from 'astro-purgecss';
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['normalize.css'],
    },
  },
  site: 'https://nomurakohei.github.io',
  base: '/underwater-image-enhancement.github.io',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ja: 'ja',
        },
      },
    }),
    purgecss(),
    compress(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    astroI18next(),
  ],
  build: {
    assets: 'styles',
  },
});
