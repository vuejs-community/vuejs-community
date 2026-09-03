import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dvgis/vite-plugin-cesium',
  description: 'Vite plugin for Cesium',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'cesium',
    'cesium-vue',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dvgis/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/@dvgis/vite-plugin-cesium',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 15,
    },
  },
})
