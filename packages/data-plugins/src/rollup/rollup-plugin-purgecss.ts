import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-purgecss',
  description: 'Rollup plugin for purgecss',
  version: '8.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'purgecss',
    'remove',
    'unused',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/FullHuman/purgecss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-purgecss',
  },
  stats: {
    downloads: {
      monthly: 5112,
      weekly: 1189,
    },
  },
})
