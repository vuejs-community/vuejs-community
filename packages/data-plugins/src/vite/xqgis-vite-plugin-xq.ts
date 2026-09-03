import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xqgis/vite-plugin-xq',
  description: 'Vite plugin for DC-SDK',
  version: '2.9.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'Cesium',
    'dc-sdk',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dvgis/vite-plugin-dc',
    npm: 'https://www.npmjs.com/package/@xqgis/vite-plugin-xq',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
