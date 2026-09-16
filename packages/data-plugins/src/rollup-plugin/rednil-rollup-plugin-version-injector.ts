import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rednil/rollup-plugin-version-injector',
  description: 'A simple rollup.js plugin to inject your application\'s version number and/or today\'s date into your built js, html, and css files!',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollupjs',
    'rollup-plugin',
    'version',
    'inject',
    'build',
    'bundle',
  ],
  source: {
    github: 'rednil/rollup-plugin-version-injector',
    npm: '@rednil/rollup-plugin-version-injector',
  },
  links: {
    github: 'https://github.com/rednil/rollup-plugin-version-injector',
    npm: 'https://www.npmjs.com/package/@rednil/rollup-plugin-version-injector',
    website: 'https://github.com/djhouseknecht/rollup-plugin-version-injector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
