import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@azimutlabs/rollup-plugin-external',
  description: 'Rollup plugin to exclude external dependencies from bundle',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'plugin',
    'rollup',
    'rollup-plugin',
    'alabs',
    'azimutlabs',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/azimutlabs/rollup',
    npm: 'https://www.npmjs.com/package/@azimutlabs/rollup-plugin-external',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 7,
    },
  },
})
