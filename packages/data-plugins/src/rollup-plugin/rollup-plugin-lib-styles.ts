import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lib-styles',
  description: 'Universal Rollup plugin for styles: PostCSS, Sass, Less, Stylus and more',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'css-modules',
    'postcss',
    'sass',
    'scss',
    'less',
    'stylus',
  ],
  source: {
    github: 'mlxiao93/rollup-plugin-lib-styles',
    npm: 'rollup-plugin-lib-styles',
  },
  links: {
    github: 'https://github.com/mlxiao93/rollup-plugin-lib-styles',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lib-styles',
    website: 'https://github.com/mlxiao93/rollup-plugin-lib-styles#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
