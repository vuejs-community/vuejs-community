import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'eddsdk-plugin',
  description: 'Vite plugin for EDDSDK',
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
    'eddsdk',
  ],
  links: {
    github: 'https://github.com/liyu022/eddsdk-plugin',
    npm: 'https://www.npmjs.com/package/eddsdk-plugin',
    website: 'https://github.com/liyu022/eddsdk-plugin#readme',
  },
  source: {
    github: 'liyu022/eddsdk-plugin',
    npm: 'eddsdk-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
