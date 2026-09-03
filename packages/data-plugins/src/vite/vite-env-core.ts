import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-env/core',
  description: 'The env.ts layer for Vite — define once, validate everywhere, import with types',
  version: '0.6.4',
  category: 'plugin',
  tags: [
    'dotenv',
    'env',
    'environment-variables',
    'standard-schema',
    'typescript',
    'validation',
    'vite',
    'vite-plugin',
    'zod',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pyyupsk/vite-env',
    npm: 'https://www.npmjs.com/package/@vite-env/core',
  },
  stats: {
    downloads: {
      monthly: 278,
      weekly: 60,
    },
  },
})
