import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-rewrite-imports',
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
  source: {
    github: 'elmsln/rollup-rewrite-imports',
    npm: 'rollup-rewrite-imports',
  },
  links: {
    github: 'https://github.com/elmsln/rollup-rewrite-imports',
    npm: 'https://www.npmjs.com/package/rollup-rewrite-imports',
    website: 'https://github.com/elmsln/rollup-rewrite-imports',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
