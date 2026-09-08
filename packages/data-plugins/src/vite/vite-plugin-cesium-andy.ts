import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-andy',
  description: 'Cesium library plugin for Vite',
  icon: 'logos:vite-icon',
  version: '1.2.24',
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
    github: 'nshen/vite-plugin-cesium',
    npm: 'vite-plugin-cesium-andy',
  },
  links: {
    github: 'https://github.com/nshen/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-andy',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
