import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-version-injector',
  description: 'A simple rollup.js plugin to inject your application\'s version number and/or today\'s date into your built js, html, and css files!',
  version: '1.3.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollupjs',
    'rollup-plugin',
    'version',
    'inject',
    'build',
    'bundle',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/djhouseknecht/rollup-plugin-version-injector',
    npm: 'https://www.npmjs.com/package/rollup-plugin-version-injector',
  },
  stats: {
    downloads: {
      monthly: 48648,
      weekly: 14627,
    },
  },
})
