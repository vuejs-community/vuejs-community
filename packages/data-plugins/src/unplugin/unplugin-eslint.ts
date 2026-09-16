import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-eslint',
  description: 'A universal bundler plugin to lint entry points and all imported files with ESLint.',
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
    github: 'wzc520pyfm/unplugin-eslint',
    npm: 'unplugin-eslint',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-eslint',
    npm: 'https://www.npmjs.com/package/unplugin-eslint',
    website: 'https://github.com/wzc520pyfm/unplugin-eslint#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
