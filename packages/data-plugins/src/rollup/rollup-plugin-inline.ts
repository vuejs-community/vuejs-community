import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline',
  description: 'plugin for processing and including static assets via imports using rollup',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'static',
    'asset bundler',
    'asset processer',
    'asset',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tylerbeck/rollup-plugin-inline',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 7,
    },
  },
})
