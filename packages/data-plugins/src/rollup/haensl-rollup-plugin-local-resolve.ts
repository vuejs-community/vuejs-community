import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@haensl/rollup-plugin-local-resolve',
  description: 'Rollup plugin to resolve relative imports from local folders without stating the index file',
  version: '1.1.13',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'resolve',
    'local',
    'index.js',
    'index.jsx',
    'js',
    'jsx',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/haensl/rollup-plugin-local-resolve',
    npm: 'https://www.npmjs.com/package/@haensl/rollup-plugin-local-resolve',
  },
  stats: {
    downloads: {
      monthly: 129,
      weekly: 30,
    },
  },
})
