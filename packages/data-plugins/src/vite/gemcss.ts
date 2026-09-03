import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'gemcss',
  description: 'Typed BEM classes from CSS modules — every block becomes a modifier-combinator function, with types inferred from the CSS',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'css-modules',
    'bem',
    'typescript',
    'vite-plugin',
    'webpack-loader',
    'css',
    'typed-css',
    'classnames',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vkalinichev/gemcss',
    npm: 'https://www.npmjs.com/package/gemcss',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 7,
    },
  },
})
