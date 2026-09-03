import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@silvenon/vite-plugin-devtools-json',
  description: 'Vite plugin for generating `com.chrome.devtools.json` on the fly in the devserver.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chrome-devtools',
    'devtools',
    'chrome',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/silvenon/vite-plugin-devtools-json',
    npm: 'https://www.npmjs.com/package/@silvenon/vite-plugin-devtools-json',
  },
  stats: {
    downloads: {
      monthly: 1112,
      weekly: 336,
    },
  },
})
