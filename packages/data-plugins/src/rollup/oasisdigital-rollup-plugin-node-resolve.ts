import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@oasisdigital/rollup-plugin-node-resolve',
  description: 'Bundle third-party dependencies in node_modules. Fork to add es2015-in-es2015 support.',
  version: '2.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@oasisdigital/rollup-plugin-node-resolve',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
