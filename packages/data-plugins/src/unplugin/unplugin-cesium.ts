import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-cesium',
  description: 'Quickly integrate CesiumJS into various bundlers',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'cesium',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rolldown',
    'transform',
  ],
  links: {
    github: 'https://github.com/vesiumjs/unplugin-cesium',
    npm: 'https://www.npmjs.com/package/unplugin-cesium',
    website: 'https://github.com/vesiumjs/unplugin-cesium#readme',
  },
  source: {
    github: 'vesiumjs/unplugin-cesium',
    npm: 'unplugin-cesium',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 72,
      weekly: 5,
    },
  },
})
