import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vome',
  description: 'Build Chrome Extensions with this Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'chrome',
    'chrome-extension',
    'extension',
    'webext',
    'webextension',
    'browser',
    'browser-extension',
  ],
  source: {
    npm: 'vome',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vome',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
