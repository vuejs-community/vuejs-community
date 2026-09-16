import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-jin',
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
    npm: 'vite-plugin-cesium-jin',
  },
  links: {
    github: 'https://github.com/nshen/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-jin',
    website: 'https://github.com/nshen/vite-plugin-cesium#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
