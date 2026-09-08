import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-optimize-arguments',
  description: 'Rollup plugin to avoid leaking `arguments` object',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'nolanlawson/rollup-plugin-optimize-arguments',
    npm: 'rollup-plugin-optimize-arguments',
  },
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
