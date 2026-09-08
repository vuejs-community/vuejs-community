import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-async',
  description: 'Transforms Async functions to generator functions before bundling.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'leebyron/rollup-plugin-async',
    npm: 'rollup-plugin-async',
  },
  links: {
    github: 'https://github.com/leebyron/rollup-plugin-async',
    npm: 'https://www.npmjs.com/package/rollup-plugin-async',
  },
  stats: {
    downloads: {
      monthly: 14432,
      weekly: 4084,
    },
  },
})
