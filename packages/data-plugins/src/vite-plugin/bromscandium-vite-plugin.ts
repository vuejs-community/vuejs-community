import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bromscandium/vite-plugin',
  description: 'Vite plugin for BromiumJS file-based routing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bromium',
    'bromiumjs',
    'vite',
    'vite-plugin',
    'file-based-routing',
  ],
  links: {
    github: 'https://github.com/bromscandium/bromiumjs',
    npm: 'https://www.npmjs.com/package/@bromscandium/vite-plugin',
    website: 'https://github.com/bromscandium/bromiumjs#readme',
  },
  source: {
    github: 'bromscandium/bromiumjs',
    npm: '@bromscandium/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 30,
      weekly: 1,
    },
  },
})
