import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-styler',
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
    github: 'plumelo/rollup-plugin-styler',
    npm: 'rollup-plugin-styler',
  },
  links: {
    github: 'https://github.com/plumelo/rollup-plugin-styler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-styler',
    website: 'https://github.com/plumelo/rollup-plugin-styler#readme',
  },
  stats: {
    stars: 62,
    downloads: {
      monthly: 239229,
      weekly: 48077,
    },
  },
})
