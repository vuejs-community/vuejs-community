import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-eslint',
  description: 'A universal bundler plugin to lint entry points and all imported files with ESLint.',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'wzc520pyfm/unplugin-eslint',
    npm: 'unplugin-eslint',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-eslint',
    npm: 'https://www.npmjs.com/package/unplugin-eslint',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
