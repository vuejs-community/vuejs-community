import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bundler-purr',
  description: 'A Vite/Webpack plugin that purrs on success, mrrps on warnings, and hisses on errors. Because your build deserves feelings.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'cat',
    'purr',
    'build',
    'fun',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/bundler-purr',
  },
  source: {
    npm: 'bundler-purr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
