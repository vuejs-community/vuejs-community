import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus-plus',
  description: 'A Rollup.js plugin to compile and load Stylus, support CSS Modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'css',
    'css-modules',
  ],
  source: {
    github: 'blackcater/rollup-plugin-stylus-plus',
    npm: 'rollup-plugin-stylus-plus',
  },
  links: {
    github: 'https://github.com/blackcater/rollup-plugin-stylus-plus',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus-plus',
    website: 'https://github.com/blackcater/rollup-plugin-stylus-plus.git',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
