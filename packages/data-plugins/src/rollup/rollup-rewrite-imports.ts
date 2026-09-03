import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-rewrite-imports',
  description: 'Append a string to esm import paths in rollup',
  version: '1.0.0',
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
    npm: 'https://www.npmjs.com/package/rollup-rewrite-imports',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
