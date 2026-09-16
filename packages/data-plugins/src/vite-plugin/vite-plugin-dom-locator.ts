import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dom-locator',
  description: 'A Vite plugin for DOM element source location tracking',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dom',
    'debug',
    'source',
    'locator',
  ],
  source: {
    npm: 'vite-plugin-dom-locator',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-dom-locator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
