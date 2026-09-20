import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rat.md/rollup-plugin-sass',
  description: 'A SASS / SCSS rollup plugin, especially designed for the development of our rat packages.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'sass',
    'scss',
    'css',
    'rat',
  ],
  links: {
    github: 'https://github.com/RatMD/rollup-plugin-sass',
    npm: 'https://www.npmjs.com/package/@rat.md/rollup-plugin-sass',
    website: 'https://rat.md/rollup-plugin-sass',
  },
  source: {
    github: 'RatMD/rollup-plugin-sass',
    npm: '@rat.md/rollup-plugin-sass',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
