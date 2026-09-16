import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tcgis/vite-plugin-gtc',
  description: 'Vite plugin for GTC-SDK',
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
    'gtc-sdk',
  ],
  source: {
    npm: '@tcgis/vite-plugin-gtc',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tcgis/vite-plugin-gtc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
