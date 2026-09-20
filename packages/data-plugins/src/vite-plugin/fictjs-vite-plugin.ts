import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fictjs/vite-plugin',
  description: 'Vite plugin for Fict',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fict',
    'vite',
    'vite-plugin',
    'jsx',
    'reactive',
  ],
  links: {
    github: 'https://github.com/fictjs/fict',
    npm: 'https://www.npmjs.com/package/@fictjs/vite-plugin',
    website: 'https://github.com/fictjs/fict#readme',
  },
  source: {
    github: 'fictjs/fict',
    npm: '@fictjs/vite-plugin',
  },
  stats: {
    stars: 62,
    downloads: {
      monthly: 694,
      weekly: 141,
    },
  },
})
