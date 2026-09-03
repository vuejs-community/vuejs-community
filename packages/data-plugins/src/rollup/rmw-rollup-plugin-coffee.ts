import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rmw/rollup-plugin-coffee',
  description: 'A Rollup.js plugin to compile CoffeeScript 2 (and 1)',
  version: '0.1.21',
  category: 'plugin',
  tags: [
    'coffee',
    'coffeescript',
    'coffee-script',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-coffee',
    npm: 'https://www.npmjs.com/package/@rmw/rollup-plugin-coffee',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
