import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@reono/client',
  description: 'Vite plugin for generating type-safe REST clients from Reono JSX APIs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'reono',
    'vite-plugin',
    'typescript',
    'rest-client',
    'code-generation',
  ],
  links: {
    github: 'https://github.com/Ntropish/reono',
    npm: 'https://www.npmjs.com/package/@reono/client',
    website: 'https://github.com/Ntropish/reono#readme',
  },
  source: {
    github: 'Ntropish/reono',
    npm: '@reono/client',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
