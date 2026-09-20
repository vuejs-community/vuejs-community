import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@adamkindberg/tailwind-typed',
  description: 'Generate fully-typed, importable access to your Tailwind v4 theme tokens (CSS variables + resolved values) for use anywhere, including non-Tailwind contexts.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/WeeWee/tailwind-typed',
    npm: 'https://www.npmjs.com/package/@adamkindberg/tailwind-typed',
    website: 'https://github.com/WeeWee/tailwind-typed#readme',
  },
  source: {
    github: 'WeeWee/tailwind-typed',
    npm: '@adamkindberg/tailwind-typed',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
