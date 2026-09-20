import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@eberlywc/rollup-plugin-rewrite-imports',
  description: 'Append a string to esm import paths in rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'esm',
    'imports',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/elmsln/rollup-rewrite-imports',
    npm: 'https://www.npmjs.com/package/@eberlywc/rollup-plugin-rewrite-imports',
    website: 'https://github.com/elmsln/rollup-rewrite-imports',
  },
  source: {
    github: 'elmsln/rollup-rewrite-imports',
    npm: '@eberlywc/rollup-plugin-rewrite-imports',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
