import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gmgis/vite-plugin-gm',
  description: 'Vite plugin for GM-SDK',
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
    npm: 'https://www.npmjs.com/package/@gmgis/vite-plugin-gm',
  },
  source: {
    npm: '@gmgis/vite-plugin-gm',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
