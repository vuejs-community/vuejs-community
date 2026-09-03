import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'monorepo-env',
  description: 'Automatically merge/share env files in a monorepo',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'env',
    'nuxt',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dapotatoman/monorepo-env',
    npm: 'https://www.npmjs.com/package/monorepo-env',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 11,
    },
  },
})
