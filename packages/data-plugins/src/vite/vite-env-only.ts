import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-env-only',
  description: 'Vite plugins for isolating server-only and client-only code',
  version: '3.0.3',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pcattori/vite-env-only',
    npm: 'https://www.npmjs.com/package/vite-env-only',
  },
  stats: {
    downloads: {
      monthly: 411760,
      weekly: 103808,
    },
  },
})
