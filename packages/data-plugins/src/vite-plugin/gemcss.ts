import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gemcss',
  description: 'Typed BEM classes from CSS modules — every block becomes a modifier-combinator function, with types inferred from the CSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'vkalinichev/gemcss',
    npm: 'gemcss',
  },
  links: {
    github: 'https://github.com/vkalinichev/gemcss',
    npm: 'https://www.npmjs.com/package/gemcss',
    website: 'https://github.com/vkalinichev/gemcss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 7,
    },
  },
})
