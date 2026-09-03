import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'eddsdk-plugin',
  description: 'Vite plugin for EDDSDK',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    '3D',
    'webGL',
    'map',
    'Cesium',
    'eddsdk',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liyu022/eddsdk-plugin',
    npm: 'https://www.npmjs.com/package/eddsdk-plugin',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
