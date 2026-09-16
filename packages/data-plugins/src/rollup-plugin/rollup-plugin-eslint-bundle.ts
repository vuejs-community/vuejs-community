import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eslint-bundle',
  description: 'Rollup plugin to verify (and fix) bundled code with ESLint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'eslint',
  ],
  source: {
    github: 'nikolay-borzov/rollup-plugin-eslint-bundle',
    npm: 'rollup-plugin-eslint-bundle',
  },
  links: {
    github: 'https://github.com/nikolay-borzov/rollup-plugin-eslint-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eslint-bundle',
    website: 'https://github.com/nikolay-borzov/rollup-plugin-eslint-bundle#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 276,
      weekly: 51,
    },
  },
})
