import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-csepdi-cesium',
  description: 'Cesium library plugin for Vite',
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
    github: 'nshen/vite-plugin-cesium',
    npm: 'vite-plugin-csepdi-cesium',
  },
  links: {
    github: 'https://github.com/nshen/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/vite-plugin-csepdi-cesium',
    website: 'https://github.com/nshen/vite-plugin-cesium#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
