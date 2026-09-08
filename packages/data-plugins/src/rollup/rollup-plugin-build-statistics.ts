import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-build-statistics',
  description: 'Rollup plugin for collecting statistics about your builds',
  icon: 'logos:rollupjs',
  version: '0.0.19',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup-plugin-build-statistics',
    'build-statistics',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'nemwiz/build-statistics-plugin',
    npm: 'rollup-plugin-build-statistics',
  },
  links: {
    github: 'https://github.com/nemwiz/build-statistics-plugin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-build-statistics',
  },
  stats: {
    downloads: {
      monthly: 627,
      weekly: 248,
    },
  },
})
