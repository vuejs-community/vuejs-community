import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'bundler-purr',
  description: 'A Vite/Webpack plugin that purrs on success, mrrps on warnings, and hisses on errors. Because your build deserves feelings.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'cat',
    'purr',
    'build',
    'fun',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/bundler-purr',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
