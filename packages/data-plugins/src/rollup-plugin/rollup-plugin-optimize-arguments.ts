import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-optimize-arguments',
  description: 'Rollup plugin to avoid leaking `arguments` object',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'arguments',
    'optimize',
  ],
  source: {
    github: 'nolanlawson/rollup-plugin-optimize-arguments',
    npm: 'rollup-plugin-optimize-arguments',
  },
  links: {
    github: 'https://github.com/nolanlawson/rollup-plugin-optimize-arguments',
    npm: 'https://www.npmjs.com/package/rollup-plugin-optimize-arguments',
    website: 'https://github.com/nolanlawson/rollup-plugin-optimize-arguments#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
