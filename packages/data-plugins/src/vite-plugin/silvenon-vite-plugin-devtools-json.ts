import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@silvenon/vite-plugin-devtools-json',
  description: 'Vite plugin for generating `com.chrome.devtools.json` on the fly in the devserver.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chrome-devtools',
    'devtools',
    'chrome',
  ],
  links: {
    github: 'https://github.com/silvenon/vite-plugin-devtools-json',
    npm: 'https://www.npmjs.com/package/@silvenon/vite-plugin-devtools-json',
    website: 'https://github.com/silvenon/vite-plugin-devtools-json#readme',
  },
  source: {
    github: 'silvenon/vite-plugin-devtools-json',
    npm: '@silvenon/vite-plugin-devtools-json',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1132,
      weekly: 336,
    },
  },
})
