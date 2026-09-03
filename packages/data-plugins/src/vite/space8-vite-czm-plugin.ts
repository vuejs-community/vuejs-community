import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@space8/vite-czm-plugin',
  description: 'czm-plugin library plugin for Vite',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'czm-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nshen/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/@space8/vite-czm-plugin',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
