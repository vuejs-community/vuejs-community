import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-checker-biome',
  description: 'Vite plugin that runs TypeScript type checker on a separate process.',
  version: '0.7.0',
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
    github: 'https://github.com/fi3ework/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-checker-biome',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
