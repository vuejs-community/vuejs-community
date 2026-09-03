import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tcgis/vite-plugin-gve',
  description: 'Vite plugin for GVE-SDK',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'Cesium',
    'gve-sdk',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@tcgis/vite-plugin-gve',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
