import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@adamkindberg/tailwind-typed',
  description: 'Generate fully-typed, importable access to your Tailwind v4 theme tokens (CSS variables + resolved values) for use anywhere, including non-Tailwind contexts.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'tailwind',
    'tailwindcss',
    'tailwind-v4',
    'typescript',
    'css-variables',
    'design-tokens',
    'vite-plugin',
    'codegen',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/WeeWee/tailwind-typed',
    npm: 'https://www.npmjs.com/package/@adamkindberg/tailwind-typed',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
