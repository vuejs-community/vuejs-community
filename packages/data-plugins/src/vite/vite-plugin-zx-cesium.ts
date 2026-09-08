import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zx-cesium',
  description: 'Vite plugin for DC-SDK',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'Cesium',
    'zx-cesium',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'dvgis/vite-plugin-dc',
    npm: 'vite-plugin-zx-cesium',
  },
  links: {
    github: 'https://github.com/dvgis/vite-plugin-dc',
    npm: 'https://www.npmjs.com/package/vite-plugin-zx-cesium',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
