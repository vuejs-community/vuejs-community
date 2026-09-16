import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tcgis/vite-plugin-gve',
  description: 'Vite plugin for GVE-SDK',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'Cesium',
    'gve-sdk',
  ],
  source: {
    npm: '@tcgis/vite-plugin-gve',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tcgis/vite-plugin-gve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
