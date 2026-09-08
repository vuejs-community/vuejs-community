import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-change',
  description: 'Unofficial customized fork of vite-plugin-cesium',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
    'cesiumjs',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yelingkong/vite-plugin-cesium',
    npm: 'vite-plugin-cesium-change',
  },
  links: {
    github: 'https://github.com/yelingkong/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-change',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
