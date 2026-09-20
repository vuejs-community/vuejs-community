import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-async',
  description: 'Transforms Async functions to generator functions before bundling.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'async',
    'await',
    'async-to-gen',
  ],
  links: {
    github: 'https://github.com/leebyron/rollup-plugin-async',
    npm: 'https://www.npmjs.com/package/rollup-plugin-async',
    website: 'https://github.com/leebyron/rollup-plugin-async',
  },
  source: {
    github: 'leebyron/rollup-plugin-async',
    npm: 'rollup-plugin-async',
  },
  stats: {
    stars: 40,
    downloads: {
      monthly: 15174,
      weekly: 3941,
    },
  },
})
