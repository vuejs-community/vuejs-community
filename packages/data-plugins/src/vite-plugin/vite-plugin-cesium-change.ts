import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-change',
  description: 'Unofficial customized fork of vite-plugin-cesium',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
    'cesiumjs',
  ],
  links: {
    github: 'https://github.com/yelingkong/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-change',
    website: 'https://github.com/yelingkong/vite-plugin-cesium#readme',
  },
  source: {
    github: 'yelingkong/vite-plugin-cesium',
    npm: 'vite-plugin-cesium-change',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
