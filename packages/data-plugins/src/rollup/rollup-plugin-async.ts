import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-async',
  description: 'Transforms Async functions to generator functions before bundling.',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'async',
    'await',
    'async-to-gen',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/leebyron/rollup-plugin-async',
    npm: 'https://www.npmjs.com/package/rollup-plugin-async',
  },
  stats: {
    downloads: {
      monthly: 15023,
      weekly: 4199,
    },
  },
})
