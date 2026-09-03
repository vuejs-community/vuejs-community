import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dsv',
  description: '🍣 A universal bundler plugin which converts `.csv` and `.tsv` files into JavaScript modules with [d3-dsv](https://github.com/d3/d3-dsv).',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-dsv',
    npm: 'https://www.npmjs.com/package/unplugin-dsv',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
