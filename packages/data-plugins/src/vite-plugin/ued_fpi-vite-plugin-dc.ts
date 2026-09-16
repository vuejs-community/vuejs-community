import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ued_fpi/vite-plugin-dc',
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
    'cesium',
    'dc-sdk',
  ],
  source: {
    github: 'ued_fpi/vite-plugin-dc',
    npm: '@ued_fpi/vite-plugin-dc',
  },
  links: {
    github: 'https://github.com/ued_fpi/vite-plugin-dc',
    npm: 'https://www.npmjs.com/package/@ued_fpi/vite-plugin-dc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
