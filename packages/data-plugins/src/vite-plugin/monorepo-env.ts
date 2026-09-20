import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'monorepo-env',
  description: 'Automatically merge/share env files in a monorepo',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'env',
    'nuxt',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dapotatoman/monorepo-env',
    npm: 'https://www.npmjs.com/package/monorepo-env',
    website: 'https://github.com/dapotatoman/monorepo-env#readme',
  },
  source: {
    github: 'dapotatoman/monorepo-env',
    npm: 'monorepo-env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 6,
    },
  },
})
