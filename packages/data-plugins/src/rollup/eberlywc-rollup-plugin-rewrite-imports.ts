import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@eberlywc/rollup-plugin-rewrite-imports',
  description: 'Append a string to esm import paths in rollup',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'esm',
    'imports',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/elmsln/rollup-rewrite-imports',
    npm: 'https://www.npmjs.com/package/@eberlywc/rollup-plugin-rewrite-imports',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 6,
    },
  },
})
