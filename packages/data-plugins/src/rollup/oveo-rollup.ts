import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@oveo/rollup',
  description: 'Rollup plugin for oveo optimizer',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'oveo',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/localvoid/oveo',
    npm: 'https://www.npmjs.com/package/@oveo/rollup',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 10,
    },
  },
})
