import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nessframework/env',
  description: 'Environment variable validation for Ness.js applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ness',
    'nessjs',
    'plugin',
    'environment-variables',
    'dotenv',
    'validation',
    'config',
    'vite-plugin',
    'env',
    'env-vars',
    'schema-validation',
  ],
  source: {
    github: 'leroyanders/Ness.js',
    npm: '@nessframework/env',
  },
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/env',
    website: 'https://nessjs.com/docs/plugins/env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 626,
      weekly: 34,
    },
  },
})
