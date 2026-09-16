import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-json2',
  description: 'A universal bundler plugin which Converts .json files to ES6 modules.',
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
    github: 'wzc520pyfm/unplugin-json',
    npm: 'unplugin-json2',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-json',
    npm: 'https://www.npmjs.com/package/unplugin-json2',
    website: 'https://github.com/wzc520pyfm/unplugin-json#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
