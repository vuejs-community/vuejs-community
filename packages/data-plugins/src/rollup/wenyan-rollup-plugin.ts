import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wenyan/rollup-plugin',
  description: 'Rollup plugin for wenyan-lang',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'wenyan',
    'wenyan-lang',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/antfu/wenyan-rollup-plugin',
    npm: 'https://www.npmjs.com/package/@wenyan/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 7,
    },
  },
})
