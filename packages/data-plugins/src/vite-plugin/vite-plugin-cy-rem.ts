import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cy-rem',
  description: 'vite 自动引入引入 cy-plugin-rem 插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rem',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-cy-rem',
  },
  source: {
    npm: 'vite-plugin-cy-rem',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 3,
    },
  },
})
