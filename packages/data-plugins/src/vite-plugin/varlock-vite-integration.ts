import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@varlock/vite-integration',
  description: 'Vite plugin to use varlock for .env file loading - adds validation, type-safety, and extra security features',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'varlock',
    'vite',
    'env',
    '.env',
    'environment variables',
    'env vars',
    'config',
    'security',
    'validation',
    'leak protection',
    'vite-plugin',
    'varlock-integration',
  ],
  links: {
    github: 'https://github.com/dmno-dev/varlock',
    npm: 'https://www.npmjs.com/package/@varlock/vite-integration',
    website: 'https://github.com/dmno-dev/varlock#readme',
  },
  source: {
    github: 'dmno-dev/varlock',
    npm: '@varlock/vite-integration',
  },
  stats: {
    stars: 4527,
    downloads: {
      monthly: 116915,
      weekly: 34806,
    },
  },
})
