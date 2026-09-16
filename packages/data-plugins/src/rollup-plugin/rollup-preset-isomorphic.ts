import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-preset-isomorphic',
  description: 'Everything you need to rollup isomorphic modules.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup-preset',
    'node',
    'commonjs',
  ],
  source: {
    github: 'shannonmoeller/rollup-preset-isomorphic',
    npm: 'rollup-preset-isomorphic',
  },
  links: {
    github: 'https://github.com/shannonmoeller/rollup-preset-isomorphic',
    npm: 'https://www.npmjs.com/package/rollup-preset-isomorphic',
    website: 'https://github.com/shannonmoeller/rollup-preset-isomorphic#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 25,
      weekly: 8,
    },
  },
})
