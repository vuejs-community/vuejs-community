import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-validator',
  description: 'A Vite plugin for environment variable validation with support for Zod, Yup, and Joi',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'ramonxm/vite-env-validator',
    npm: 'vite-plugin-env-validator',
  },
  links: {
    github: 'https://github.com/ramonxm/vite-env-validator',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-validator',
    website: 'https://github.com/ramonxm/vite-env-validator#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
