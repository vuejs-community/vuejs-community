import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-env-only',
  description: 'Vite plugins for isolating server-only and client-only code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'env',
    'only',
    'client',
    'server',
    'macro',
    'deny',
    'imports',
  ],
  links: {
    github: 'https://github.com/pcattori/vite-env-only',
    npm: 'https://www.npmjs.com/package/vite-env-only',
    website: 'https://github.com/pcattori/vite-env-only#readme',
  },
  source: {
    github: 'pcattori/vite-env-only',
    npm: 'vite-env-only',
  },
  stats: {
    stars: 167,
    downloads: {
      monthly: 377162,
      weekly: 83192,
    },
  },
})
