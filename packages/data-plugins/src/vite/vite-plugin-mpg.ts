import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mpg',
  description: 'vite multi pages plugin',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'multi-pages',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'just-ads/vite-plugin-multi-page',
    npm: 'vite-plugin-mpg',
  },
  links: {
    github: 'https://github.com/just-ads/vite-plugin-multi-page',
    npm: 'https://www.npmjs.com/package/vite-plugin-mpg',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
