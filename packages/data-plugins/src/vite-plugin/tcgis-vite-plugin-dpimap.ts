import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tcgis/vite-plugin-dpimap',
  description: 'dpimap library plugin for Vite',
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
    npm: '@tcgis/vite-plugin-dpimap',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tcgis/vite-plugin-dpimap',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
