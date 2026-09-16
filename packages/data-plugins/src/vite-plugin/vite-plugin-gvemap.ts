import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gvemap',
  description: 'gvemap library plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
  ],
  source: {
    npm: 'vite-plugin-gvemap',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-gvemap',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
