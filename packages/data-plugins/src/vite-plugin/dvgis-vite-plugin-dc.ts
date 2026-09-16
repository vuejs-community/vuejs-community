import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dvgis/vite-plugin-dc',
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
  source: {
    github: 'dvgis/vite-plugin-dc',
    npm: '@dvgis/vite-plugin-dc',
  },
  links: {
    github: 'https://github.com/dvgis/vite-plugin-dc',
    npm: 'https://www.npmjs.com/package/@dvgis/vite-plugin-dc',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 182,
      weekly: 32,
    },
  },
})
