import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-engine',
  description: 'Zero-config Vite plugin for @cesium/engine — handles assets, CESIUM_BASE_URL, and Ion token automatically.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
    '@cesium/engine',
    '3d',
  ],
  links: {
    github: 'https://github.com/jfayot/vite-plugin-cesium-engine',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-engine',
    website: 'https://github.com/jfayot/vite-plugin-cesium-engine',
  },
  source: {
    github: 'jfayot/vite-plugin-cesium-engine',
    npm: 'vite-plugin-cesium-engine',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 956,
      weekly: 90,
    },
  },
})
