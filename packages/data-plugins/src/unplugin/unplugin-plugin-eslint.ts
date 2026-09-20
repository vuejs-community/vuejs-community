import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-plugin-eslint',
  description: 'A universal bundler plugin for integrating the Eslint linter into your project.',
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
    'obciid',
    'eslint-config',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-plugin-eslint',
  },
  source: {
    npm: 'unplugin-plugin-eslint',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
