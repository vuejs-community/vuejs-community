import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-json2',
  description: 'A universal bundler plugin which Converts .json files to ES6 modules.',
  version: '0.2.1',
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
    github: 'https://github.com/wzc520pyfm/unplugin-json',
    npm: 'https://www.npmjs.com/package/unplugin-json2',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
