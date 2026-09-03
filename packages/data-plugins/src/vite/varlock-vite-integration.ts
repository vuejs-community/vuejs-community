import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@varlock/vite-integration',
  description: 'Vite plugin to use varlock for .env file loading - adds validation, type-safety, and extra security features',
  version: '1.5.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dmno-dev/varlock',
    npm: 'https://www.npmjs.com/package/@varlock/vite-integration',
  },
  stats: {
    downloads: {
      monthly: 95014,
      weekly: 25589,
    },
  },
})
