import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-parity',
  description: 'Vite plugin that fails your build or dev server start when a variable from .env.example is missing or empty. Zero config. Built on @acus9345/env-parity.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'dotenv',
    '.env',
    '.env.example',
    'environment-variables',
    'validation',
  ],
  links: {
    github: 'https://github.com/acus9345/vite-plugin-env-parity',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-parity',
    website: 'https://github.com/acus9345/vite-plugin-env-parity#readme',
  },
  source: {
    github: 'acus9345/vite-plugin-env-parity',
    npm: 'vite-plugin-env-parity',
  },
})
