import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wenyanlang/rollup-plugin',
  description: 'Rollup plugin for wenyan-lang',
  version: '0.0.2',
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
    npm: 'https://www.npmjs.com/package/@wenyanlang/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
