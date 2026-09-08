import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-purgecss',
  description: 'PurgeCSS plugin for Vite',
  icon: 'logos:vite-icon',
  version: '0.2.13',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'colecrouter/vite-plugin-html-purgecss',
    npm: 'vite-plugin-purgecss',
  },
  links: {
    github: 'https://github.com/colecrouter/vite-plugin-html-purgecss',
    npm: 'https://www.npmjs.com/package/vite-plugin-purgecss',
  },
  stats: {
    downloads: {
      monthly: 49834,
      weekly: 12145,
    },
  },
})
