import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hbgis/vite-plugin',
  description: 'Vite plugin for DC-SDK',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'Cesium',
    'dc-sdk',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@hbgis/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
