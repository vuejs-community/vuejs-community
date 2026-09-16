import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-toon',
  description: 'Vite plugin for importing .toon files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'toon',
    'toon-format',
  ],
  source: {
    npm: 'vite-plugin-toon',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-toon',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
