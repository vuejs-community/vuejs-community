import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dvgis/vite-plugin-cesium',
  description: 'Vite plugin for Cesium',
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
    'cesium',
    'cesium-vue',
  ],
  source: {
    github: 'dvgis/vite-plugin-cesium',
    npm: '@dvgis/vite-plugin-cesium',
  },
  links: {
    github: 'https://github.com/dvgis/vite-plugin-cesium',
    npm: 'https://www.npmjs.com/package/@dvgis/vite-plugin-cesium',
    website: 'https://www.dvgis.cn/',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 42,
      weekly: 8,
    },
  },
})
