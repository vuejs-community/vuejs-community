import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@developwise/envy',
  description: 'Vite-based tooling for environment variable cascade loading, schema validation, type generation, and process.env injection.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/its-tim-lee/developwise',
    npm: 'https://www.npmjs.com/package/@developwise/envy',
    website: 'https://github.com/its-tim-lee/developwise/tree/main/packages/envy#readme',
  },
  source: {
    github: 'its-tim-lee/developwise',
    npm: '@developwise/envy',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 6,
    },
  },
})
