// https://astro.build/config
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import purgecss from 'astro-purgecss';

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['normalize.css'],
    },
  },
  // Your final, deployed URL
  site: 'https://nomurakohei.github.io/underwater-image-enhancement.github.io/',
  // The base path to deploy to
  base: '/',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en-US', // The `defaultLocale` value must present in `locales` keys
          ja: 'ja',
        },
      },
    }),
    purgecss(),
    compress(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
