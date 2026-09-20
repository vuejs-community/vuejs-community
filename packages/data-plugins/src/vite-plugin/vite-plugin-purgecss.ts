import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-purgecss',
  description: 'PurgeCSS plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
  ],
  links: {
    github: 'https://github.com/colecrouter/vite-plugin-html-purgecss',
    npm: 'https://www.npmjs.com/package/vite-plugin-purgecss',
    website: 'https://github.com/colecrouter/vite-plugin-html-purgecss#readme',
  },
  source: {
    github: 'colecrouter/vite-plugin-html-purgecss',
    npm: 'vite-plugin-purgecss',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 41847,
      weekly: 8458,
    },
  },
})
