import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/vicss',
  description: 'Typed, design-system-first atomic CSS for Vite: style objects compiled to short hashed class names, recipes with slots and responsive variants, one order-proof stylesheet',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'atomic-css',
    'css',
    'css-in-js',
    'design-system',
    'design-tokens',
    'eslint-plugin',
    'oxlint-plugin',
    'vite',
    'vite-plugin',
    'zero-runtime',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/vicss',
    website: 'https://github.com/menapo/kit/blob/main/packages/vicss/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/vicss',
  },
})
