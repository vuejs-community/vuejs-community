import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@developwise/envy',
  description: 'Vite-based tooling for environment variable cascade loading, schema validation, type generation, and process.env injection.',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'dotenv',
    'env-validation',
    'environment-variables',
    'envy',
    'process-env',
    'typescript',
    'vite',
    'vite-plugin',
    'zod',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/its-tim-lee/developwise',
    npm: 'https://www.npmjs.com/package/@developwise/envy',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 7,
    },
  },
})
