import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unused',
  description: 'Rollup plugin to check for unused files',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'ls-age/devtools',
    npm: 'rollup-plugin-unused',
  },
  links: {
    github: 'https://github.com/ls-age/devtools',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unused',
  },
  stats: {
    downloads: {
      monthly: 15246,
      weekly: 3441,
    },
  },
})
