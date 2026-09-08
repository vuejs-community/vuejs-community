import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rewrite-imports',
  description: 'Append a string to esm import paths in rollup.',
  icon: 'logos:rollupjs',
  version: '2.0.0',
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
  source: {
    github: 'elmsln/rollup-rewrite-imports',
    npm: 'rollup-plugin-rewrite-imports',
  },
  links: {
    github: 'https://github.com/elmsln/rollup-rewrite-imports',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rewrite-imports',
  },
  stats: {
    downloads: {
      monthly: 165,
      weekly: 35,
    },
  },
})
