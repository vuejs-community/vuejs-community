import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-proxy-directories',
  description: 'creates proxy directories for libraries without configuration to make direct imports easier.',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
    'proxy-directories',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/adriankremer/rollup-plugin-proxy-directories',
    npm: 'https://www.npmjs.com/package/rollup-plugin-proxy-directories',
  },
  stats: {
    downloads: {
      monthly: 120,
      weekly: 4,
    },
  },
})
