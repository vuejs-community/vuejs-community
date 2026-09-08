import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus-to-css',
  description: 'A Rollup.js plugin to compile Stylus to css only',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'robhicks/rollup-plugin-stylus-to-css',
    npm: 'rollup-plugin-stylus-to-css',
  },
  links: {
    github: 'https://github.com/robhicks/rollup-plugin-stylus-to-css',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus-to-css',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
