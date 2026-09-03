import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-validate-env',
  description: 'Vite plugin to validate environment variables against any standard schema library (Zod, Valibot, ArkType).',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'env',
    'validation',
    'standard-schema',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/handtrix/vite-plugin-validate-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-validate-env',
  },
  stats: {
    downloads: {
      monthly: 201,
      weekly: 36,
    },
  },
})
