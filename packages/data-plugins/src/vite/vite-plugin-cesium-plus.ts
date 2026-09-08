import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-plus',
  description: 'Cesium library plugin for Vite',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'konogousanda/vite-plugin-cesium-plus',
    npm: 'vite-plugin-cesium-plus',
  },
  links: {
    github: 'https://github.com/konogousanda/vite-plugin-cesium-plus',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-plus',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
