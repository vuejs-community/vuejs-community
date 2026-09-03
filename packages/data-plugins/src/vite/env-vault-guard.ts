import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'env-vault-guard',
  description: 'Compile-time and runtime environment variable auditor and leak prevention shield.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'dotenv',
    'security',
    'secret-leak',
    'process.env',
    'env',
    'vite-plugin',
    'webpack-plugin',
    'auditor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/env-vault-guard',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
