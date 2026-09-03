import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@reono/client',
  description: 'Vite plugin for generating type-safe REST clients from Reono JSX APIs',
  version: '1.0.12',
  category: 'plugin',
  tags: [
    'reono',
    'vite-plugin',
    'typescript',
    'rest-client',
    'code-generation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Ntropish/reono',
    npm: 'https://www.npmjs.com/package/@reono/client',
  },
  stats: {
    downloads: {
      monthly: 62,
      weekly: 9,
    },
  },
})
