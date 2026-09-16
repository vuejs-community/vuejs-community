import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-version-injector',
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
    github: 'djhouseknecht/rollup-plugin-version-injector',
    npm: 'rollup-plugin-version-injector',
  },
  links: {
    github: 'https://github.com/djhouseknecht/rollup-plugin-version-injector',
    npm: 'https://www.npmjs.com/package/rollup-plugin-version-injector',
    website: 'https://github.com/djhouseknecht/rollup-plugin-version-injector#readme',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 54254,
      weekly: 11105,
    },
  },
})
