import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-strip',
  description: 'A universal bundler plugin to remove `debugger` statements and functions like `assert.equal` and `console.log` from your code.',
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
    github: 'wzc520pyfm/unplugin-strip',
    npm: 'unplugin-strip',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-strip',
    npm: 'https://www.npmjs.com/package/unplugin-strip',
    website: 'https://github.com/wzc520pyfm/unplugin-strip#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
