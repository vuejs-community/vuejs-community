import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-build-statistics',
  description: 'Rollup plugin for collecting statistics about your builds',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup-plugin-build-statistics',
    'build-statistics',
  ],
  links: {
    github: 'https://github.com/nemwiz/build-statistics-plugin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-build-statistics',
    website: 'https://github.com/nemwiz/build-statistics-plugin#readme',
  },
  source: {
    github: 'nemwiz/build-statistics-plugin',
    npm: 'rollup-plugin-build-statistics',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 494,
      weekly: 75,
    },
  },
})
