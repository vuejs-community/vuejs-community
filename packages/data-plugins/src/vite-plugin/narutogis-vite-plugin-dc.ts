import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@narutogis/vite-plugin-dc',
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
    'narutogis',
    'Cesium',
    'map3d-dc-sdk',
  ],
  source: {
    github: 'dailiwei/vite-plugin-dc',
    npm: '@narutogis/vite-plugin-dc',
  },
  links: {
    github: 'https://github.com/dailiwei/vite-plugin-dc',
    npm: 'https://www.npmjs.com/package/@narutogis/vite-plugin-dc',
    website: 'https://github.com/dailiwei/vite-plugin-dc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
