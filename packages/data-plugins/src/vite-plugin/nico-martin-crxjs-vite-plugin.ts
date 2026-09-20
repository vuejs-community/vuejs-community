import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nico-martin/crxjs-vite-plugin',
  description: 'Build Chrome Extensions with this Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'chrome',
    'chrome-extension',
    'extension',
    'webext',
    'webextension',
    'browser',
    'browser-extension',
  ],
  links: {
    github: 'https://github.com/nico-martin/chrome-extension-tools',
    npm: 'https://www.npmjs.com/package/@nico-martin/crxjs-vite-plugin',
    website: 'https://github.com/nico-martin/chrome-extension-tools',
  },
  source: {
    github: 'nico-martin/chrome-extension-tools',
    npm: '@nico-martin/crxjs-vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
