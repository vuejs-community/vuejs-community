import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rednil/rollup-plugin-version-injector',
  description: 'A simple rollup.js plugin to inject your application\'s version number and/or today\'s date into your built js, html, and css files!',
  version: '1.0.0',
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
    github: 'https://github.com/rednil/rollup-plugin-version-injector',
    npm: 'https://www.npmjs.com/package/@rednil/rollup-plugin-version-injector',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
