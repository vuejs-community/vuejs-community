import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@allex/rollup-plugin-node-resolve',
  description: 'Bundle third-party dependencies in node_modules',
  version: '4.0.0',
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
    github: 'https://github.com/fedorio/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/@allex/rollup-plugin-node-resolve',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 11,
    },
  },
})
