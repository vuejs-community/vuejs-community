import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-purgecss',
  description: 'Rollup plugin for purgecss',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'FullHuman/purgecss',
    npm: 'rollup-plugin-purgecss',
  },
  links: {
    github: 'https://github.com/FullHuman/purgecss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-purgecss',
  },
  stats: {
    downloads: {
      monthly: 4884,
      weekly: 1183,
    },
  },
})
