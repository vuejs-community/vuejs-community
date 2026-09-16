import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dsv',
  description: '🍣 A universal bundler plugin which converts `.csv` and `.tsv` files into JavaScript modules with [d3-dsv](https://github.com/d3/d3-dsv).',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'wzc520pyfm/unplugin-dsv',
    npm: 'unplugin-dsv',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-dsv',
    npm: 'https://www.npmjs.com/package/unplugin-dsv',
    website: 'https://github.com/wzc520pyfm/unplugin-dsv#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 7,
    },
  },
})
