import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unused',
  description: 'Rollup plugin to check for unused files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'unused',
    'files',
    'import',
    'module',
  ],
  links: {
    github: 'https://github.com/ls-age/devtools',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unused',
    website: 'https://github.com/ls-age/devtools/tree/master/packages/rollup-plugin-unused#readme',
  },
  source: {
    github: 'ls-age/devtools',
    npm: 'rollup-plugin-unused',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 10819,
      weekly: 1300,
    },
  },
})
