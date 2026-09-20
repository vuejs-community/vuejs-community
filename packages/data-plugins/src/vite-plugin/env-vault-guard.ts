import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'env-vault-guard',
  description: 'Compile-time and runtime environment variable auditor and leak prevention shield.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/env-vault-guard',
  },
  source: {
    npm: 'env-vault-guard',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
