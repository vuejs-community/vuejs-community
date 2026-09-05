import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-strip',
  description: 'A universal bundler plugin to remove `debugger` statements and functions like `assert.equal` and `console.log` from your code.',
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
    github: 'https://github.com/wzc520pyfm/unplugin-strip',
    npm: 'https://www.npmjs.com/package/unplugin-strip',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
