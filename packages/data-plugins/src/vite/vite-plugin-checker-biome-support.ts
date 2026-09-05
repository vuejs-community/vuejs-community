import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-checker-biome-support',
  description: 'Vite plugin that runs TypeScript type checker on a separate process.',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jonondarnad/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-checker-biome-support',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 0,
    },
  },
})
