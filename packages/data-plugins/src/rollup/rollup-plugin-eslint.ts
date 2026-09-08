import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eslint',
  description: 'Verify entry point and all imported files with ESLint',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'TrySound/rollup-plugin-eslint',
    npm: 'rollup-plugin-eslint',
  },
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
