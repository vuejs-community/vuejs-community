import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@space8/vite-czm-plugin',
  description: 'czm-plugin library plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'czm-plugin',
  ],
  links: {
    github: 'https://github.com/nshen/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/@space8/vite-czm-plugin',
    website: 'https://github.com/nshen/vite-plugin-cesium#readme',
  },
  source: {
    github: 'nshen/vite-plugin-cesium',
    npm: '@space8/vite-czm-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
