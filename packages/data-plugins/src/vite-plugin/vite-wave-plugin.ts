import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-wave-plugin',
  description: 'Build Wave Extensions with this Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'wave',
    'wave-extension',
    'extension',
    'webext',
    'webextension',
    'browser',
    'browser-extension',
  ],
  links: {
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/vite-wave-plugin',
    website: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
  },
  source: {
    github: 'crxjs/rollup-plugin-chrome-extension',
    npm: 'vite-wave-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
