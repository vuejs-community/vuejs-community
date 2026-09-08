import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-caffeinate',
  description: 'Integration between Rollup and CoffeeScript.',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'coffeescript',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'davezuko/rollup-plugin-caffeinate',
    npm: 'rollup-plugin-caffeinate',
  },
  links: {
    github: 'https://github.com/davezuko/rollup-plugin-caffeinate',
    npm: 'https://www.npmjs.com/package/rollup-plugin-caffeinate',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
