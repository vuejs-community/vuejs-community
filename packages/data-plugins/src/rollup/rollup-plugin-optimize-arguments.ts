import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-optimize-arguments',
  description: 'Rollup plugin to avoid leaking `arguments` object',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'arguments',
    'optimize',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/nolanlawson/rollup-plugin-optimize-arguments',
    npm: 'https://www.npmjs.com/package/rollup-plugin-optimize-arguments',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
