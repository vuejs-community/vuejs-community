import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-preset-isomorphic',
  description: 'Everything you need to rollup isomorphic modules.',
  version: '1.1.0-1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup-preset',
    'node',
    'commonjs',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/shannonmoeller/rollup-preset-isomorphic',
    npm: 'https://www.npmjs.com/package/rollup-preset-isomorphic',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 7,
    },
  },
})
