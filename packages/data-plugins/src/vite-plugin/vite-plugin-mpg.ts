import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mpg',
  description: 'vite multi pages plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'multi-pages',
  ],
  source: {
    github: 'just-ads/vite-plugin-multi-page',
    npm: 'vite-plugin-mpg',
  },
  links: {
    github: 'https://github.com/just-ads/vite-plugin-multi-page',
    npm: 'https://www.npmjs.com/package/vite-plugin-mpg',
    website: 'https://github.com/just-ads/vite-plugin-multi-page#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
