import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-icon-types',
  description: 'Vite plugin that generates typed svg icon names and a preview page.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svg',
    'icons',
    'types',
    'preview',
  ],
  source: {
    npm: 'vite-plugin-svg-icon-types',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-icon-types',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
