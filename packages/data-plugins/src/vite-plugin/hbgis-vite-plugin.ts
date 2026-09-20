import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hbgis/vite-plugin',
  description: 'Vite plugin for DC-SDK',
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
    'dc-sdk',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@hbgis/vite-plugin',
  },
  source: {
    npm: '@hbgis/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
