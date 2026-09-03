import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-wave-plugin',
  description: 'Build Wave Extensions with this Vite plugin.',
  version: '2.0.0-beta.15',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/vite-wave-plugin',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
