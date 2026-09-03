import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@atomico/rollup-plugin-sizes',
  description: 'This small utility allows you to monitor the size of the bundle',
  version: '1.1.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'gzip',
    'brotli',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/atomicojs/rollup-plugin-sizes',
    npm: 'https://www.npmjs.com/package/@atomico/rollup-plugin-sizes',
  },
  stats: {
    downloads: {
      monthly: 26399,
      weekly: 5262,
    },
  },
})
