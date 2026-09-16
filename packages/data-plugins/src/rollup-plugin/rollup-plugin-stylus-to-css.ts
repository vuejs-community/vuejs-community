import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylus-to-css',
  description: 'A Rollup.js plugin to compile Stylus to css only',
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
  ],
  source: {
    github: 'robhicks/rollup-plugin-stylus-to-css',
    npm: 'rollup-plugin-stylus-to-css',
  },
  links: {
    github: 'https://github.com/robhicks/rollup-plugin-stylus-to-css',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylus-to-css',
    website: 'https://github.com/robhicks/rollup-plugin-stylus-to-css',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
