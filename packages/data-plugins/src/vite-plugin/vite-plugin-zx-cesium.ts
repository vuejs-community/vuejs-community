import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zx-cesium',
  description: 'Vite plugin for DC-SDK',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'Cesium',
    'zx-cesium',
  ],
  links: {
    github: 'https://github.com/dvgis/vite-plugin-dc',
    npm: 'https://www.npmjs.com/package/vite-plugin-zx-cesium',
    website: 'https://github.com/dvgis/vite-plugin-dc#readme',
  },
  source: {
    github: 'dvgis/vite-plugin-dc',
    npm: 'vite-plugin-zx-cesium',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
