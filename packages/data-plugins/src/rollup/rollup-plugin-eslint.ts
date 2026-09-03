import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eslint',
  description: 'Verify entry point and all imported files with ESLint',
  version: '7.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'eslint',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/TrySound/rollup-plugin-eslint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eslint',
  },
  stats: {
    downloads: {
      monthly: 38443,
      weekly: 9609,
    },
  },
})
