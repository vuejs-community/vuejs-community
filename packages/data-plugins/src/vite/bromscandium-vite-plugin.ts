import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bromscandium/vite-plugin',
  description: 'Vite plugin for BromiumJS file-based routing',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'bromium',
    'bromiumjs',
    'vite',
    'vite-plugin',
    'file-based-routing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bromscandium/bromiumjs',
    npm: 'https://www.npmjs.com/package/@bromscandium/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 9,
    },
  },
})
