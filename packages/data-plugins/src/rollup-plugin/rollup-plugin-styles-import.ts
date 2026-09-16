import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-styles-import',
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
    github: 'Anidetrix/rollup-plugin-styles',
    npm: 'rollup-plugin-styles-import',
  },
  links: {
    github: 'https://github.com/Anidetrix/rollup-plugin-styles',
    npm: 'https://www.npmjs.com/package/rollup-plugin-styles-import',
    website: 'https://github.com/Anidetrix/rollup-plugin-styles#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
