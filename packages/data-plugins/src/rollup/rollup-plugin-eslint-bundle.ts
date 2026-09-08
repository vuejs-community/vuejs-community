import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eslint-bundle',
  description: 'Rollup plugin to verify (and fix) bundled code with ESLint',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'nikolay-borzov/rollup-plugin-eslint-bundle',
    npm: 'rollup-plugin-eslint-bundle',
  },
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
