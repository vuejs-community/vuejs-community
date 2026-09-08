import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-build',
  description: 'CesiumJS support for Vite',
  icon: 'logos:vite-icon',
  version: '0.7.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
    'CesiumJS',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 's3xysteak/vite-plugin-cesium-build',
    npm: 'vite-plugin-cesium-build',
  },
  links: {
    github: 'https://github.com/s3xysteak/vite-plugin-cesium-build',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-build',
  },
  stats: {
    downloads: {
      monthly: 5417,
      weekly: 1340,
    },
  },
})
