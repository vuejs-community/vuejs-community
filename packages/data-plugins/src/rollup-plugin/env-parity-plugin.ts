import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'env-parity-plugin',
  description: 'Fail your Webpack, Rspack, Rollup, Rolldown, Astro or Next.js build when a variable from .env.example is missing or empty. The bundler-agnostic sibling of vite-plugin-env-parity. Zero dependencies.',
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
