import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'feima-vite-plugins',
  description: 'Feima Vite 插件集合',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'fvxe-table',
    'id-check',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/feima-vite-plugins',
  },
  source: {
    npm: 'feima-vite-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
