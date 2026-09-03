import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unused',
  description: 'Rollup plugin to check for unused files',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'unused',
    'files',
    'import',
    'module',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ls-age/devtools',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unused',
  },
  stats: {
    downloads: {
      monthly: 16883,
      weekly: 4037,
    },
  },
})
