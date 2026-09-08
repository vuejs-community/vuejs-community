import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-validator',
  description: 'A Vite plugin for environment variable validation with support for Zod, Yup, and Joi',
  icon: 'logos:vite-icon',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'environment',
    'validation',
    'zod',
    'yup',
    'joi',
    'env',
    'typescript',
    'build-time',
    'type-safe',
    'environment-variables',
    'schema-validation',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ramonxm/vite-env-validator',
    npm: 'vite-plugin-env-validator',
  },
  links: {
    github: 'https://github.com/ramonxm/vite-env-validator',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-validator',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 6,
    },
  },
})
