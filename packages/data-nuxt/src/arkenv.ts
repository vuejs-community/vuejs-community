import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'arkenv',
  description: 'Environment variable validation from editor to runtime',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/yamcodes/arkenv',
    npm: 'https://npmjs.com/package/@arkenv/nuxt',
    website: 'https://arkenv.js.org',
  },
  source: {
    github: 'yamcodes/arkenv#main/packages/nuxt',
    npm: '@arkenv/nuxt',
  },
  stats: {
    stars: 140,
    downloads: {
      monthly: 957,
      weekly: 574,
    },
  },
})
