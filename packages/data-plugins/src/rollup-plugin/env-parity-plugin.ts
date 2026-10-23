import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'env-parity-plugin',
  description: 'Fail your Webpack, Rspack, Rollup, Rolldown, Astro or Next.js build or dev server when a variable from .env.example is missing or empty, or when your code reads one the example doesn\'t list. Catches server secrets in Next.js client components. Built on @a',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'env',
    'dotenv',
    '.env',
    '.env.example',
    'environment-variables',
    'validation',
    'webpack',
    'webpack-plugin',
    'rspack',
    'rollup',
    'rollup-plugin',
    'rolldown',
    'astro',
    'astro-integration',
    'nextjs',
    'next',
    'process.env',
    'client-components',
    'lint',
  ],
  links: {
    github: 'https://github.com/acus9345/env-parity-plugin',
    npm: 'https://www.npmjs.com/package/env-parity-plugin',
    website: 'https://github.com/acus9345/env-parity-plugin#readme',
  },
  source: {
    github: 'acus9345/env-parity-plugin',
    npm: 'env-parity-plugin',
  },
})
