import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gordonmleigh/rollup-plugin-npm',
  description: 'A Rollup plugin to install npm packages into the output',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/gordonmleigh/rollup-plugin-npm',
    npm: 'https://www.npmjs.com/package/@gordonmleigh/rollup-plugin-npm',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 4,
    },
  },
})
