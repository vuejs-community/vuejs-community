import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus-plus',
  description: 'A Rollup.js plugin to compile and load Stylus, support CSS Modules',
  icon: 'logos:rollupjs',
  version: '2.0.0-beta.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'css',
    'css-modules',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'blackcater/rollup-plugin-stylus-plus',
    npm: 'rollup-plugin-stylus-plus',
  },
  links: {
    github: 'https://github.com/blackcater/rollup-plugin-stylus-plus',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus-plus',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 6,
    },
  },
})
