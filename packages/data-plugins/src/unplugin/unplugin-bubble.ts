import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-bubble',
  description: 'A universal bundler plugin which converts ES2015+ code with the Bublé compiler.',
  icon: '',
  version: '0.2.0',
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
    github: 'https://github.com/wzc520pyfm/unplugin-bubble',
    npm: 'https://www.npmjs.com/package/unplugin-bubble',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
