import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-toon',
  description: 'Vite plugin for importing .toon files',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'toon',
    'toon-format',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-toon',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
