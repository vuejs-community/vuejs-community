import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-jin',
  description: 'Cesium library plugin for Vite',
  icon: 'logos:vite-icon',
  version: '1.2.23',
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
    npm: 'vite-plugin-cesium-jin',
  },
  links: {
    github: 'https://github.com/nshen/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-jin',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
