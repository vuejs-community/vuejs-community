import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gem-mine/rollup-plugin-styles',
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
  links: {
    github: 'https://github.com/Anidetrix/rollup-plugin-styles',
    npm: 'https://www.npmjs.com/package/@gem-mine/rollup-plugin-styles',
    website: 'https://github.com/Anidetrix/rollup-plugin-styles#readme',
  },
  source: {
    github: 'Anidetrix/rollup-plugin-styles',
    npm: '@gem-mine/rollup-plugin-styles',
  },
  stats: {
    stars: 250,
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
