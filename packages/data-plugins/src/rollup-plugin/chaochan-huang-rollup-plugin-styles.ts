import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chaochan-huang/rollup-plugin-styles',
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
    github: 'danhuang1202/rollup-plugin-styles',
    npm: '@chaochan-huang/rollup-plugin-styles',
  },
  links: {
    github: 'https://github.com/danhuang1202/rollup-plugin-styles',
    npm: 'https://www.npmjs.com/package/@chaochan-huang/rollup-plugin-styles',
    website: 'https://github.com/danhuang1202/rollup-plugin-styles#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
