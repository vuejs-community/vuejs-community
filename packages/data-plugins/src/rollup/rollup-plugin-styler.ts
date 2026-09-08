import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-styler',
  description: 'Universal Rollup plugin for styles: PostCSS, Sass, Less, Stylus and more',
  icon: 'logos:rollupjs',
  version: '2.1.0',
  category: 'plugin',
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
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'plumelo/rollup-plugin-styler',
    npm: 'rollup-plugin-styler',
  },
  links: {
    github: 'https://github.com/plumelo/rollup-plugin-styler',
    npm: 'https://www.npmjs.com/package/rollup-plugin-styler',
  },
  stats: {
    downloads: {
      monthly: 248154,
      weekly: 51751,
    },
  },
})
