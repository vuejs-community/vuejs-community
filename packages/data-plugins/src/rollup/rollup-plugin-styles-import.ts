import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-styles-import',
  description: 'Universal Rollup plugin for styles: PostCSS, Sass, Less, Stylus and more',
  icon: 'logos:rollupjs',
  version: '1.0.0',
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
    github: 'Anidetrix/rollup-plugin-styles',
    npm: 'rollup-plugin-styles-import',
  },
  links: {
    github: 'https://github.com/Anidetrix/rollup-plugin-styles',
    npm: 'https://www.npmjs.com/package/rollup-plugin-styles-import',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
