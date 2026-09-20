import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zhcloudtech/vite-plugin-cesium',
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
  links: {
    github: 'https://github.com/nshen/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/@zhcloudtech/vite-plugin-cesium',
    website: 'https://github.com/nshen/vite-plugin-cesium#readme',
  },
  source: {
    github: 'nshen/vite-plugin-cesium',
    npm: '@zhcloudtech/vite-plugin-cesium',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
