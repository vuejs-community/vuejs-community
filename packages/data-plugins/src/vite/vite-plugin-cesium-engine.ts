import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-engine',
  description: 'Zero-config Vite plugin for @cesium/engine — handles assets, CESIUM_BASE_URL, and Ion token automatically.',
  version: '1.10.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
    '@cesium/engine',
    '3d',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jfayot/vite-plugin-cesium-engine',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-engine',
  },
  stats: {
    downloads: {
      monthly: 1018,
      weekly: 379,
    },
  },
})
