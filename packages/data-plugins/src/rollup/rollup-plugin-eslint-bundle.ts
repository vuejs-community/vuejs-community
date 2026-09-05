import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eslint-bundle',
  description: 'Rollup plugin to verify (and fix) bundled code with ESLint',
  version: '9.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'eslint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/nikolay-borzov/rollup-plugin-eslint-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eslint-bundle',
  },
  stats: {
    downloads: {
      monthly: 342,
      weekly: 69,
    },
  },
})
