import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rmw/rollup-plugin-coffee',
  description: 'A Rollup.js plugin to compile CoffeeScript 2 (and 1)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'coffee',
    'coffeescript',
    'coffee-script',
    'rollup-plugin',
  ],
  source: {
    github: 'zeekay/rollup-plugin-coffee',
    npm: '@rmw/rollup-plugin-coffee',
  },
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-coffee',
    npm: 'https://www.npmjs.com/package/@rmw/rollup-plugin-coffee',
    website: 'https://github.com/zeekay/rollup-plugin-coffee',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
