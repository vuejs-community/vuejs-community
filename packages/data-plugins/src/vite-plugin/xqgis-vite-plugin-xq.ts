import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xqgis/vite-plugin-xq',
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
    'dc-sdk',
  ],
  links: {
    github: 'https://github.com/dvgis/vite-plugin-dc',
    npm: 'https://www.npmjs.com/package/@xqgis/vite-plugin-xq',
    website: 'https://github.com/dvgis/vite-plugin-dc#readme',
  },
  source: {
    github: 'dvgis/vite-plugin-dc',
    npm: '@xqgis/vite-plugin-xq',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
