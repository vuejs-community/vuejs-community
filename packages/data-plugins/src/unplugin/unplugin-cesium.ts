import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-cesium',
  description: 'Quickly integrate CesiumJS into various bundlers',
  version: '3.1.0',
  category: 'plugin',
  tags: [
    'cesium',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rolldown',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/vesiumjs/unplugin-cesium',
    npm: 'https://www.npmjs.com/package/unplugin-cesium',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 12,
    },
  },
})
