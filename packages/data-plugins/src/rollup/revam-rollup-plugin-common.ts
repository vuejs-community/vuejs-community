import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@revam/rollup-plugin-common',
  description: 'Revam\'s common tasks for rollup in a single plugin',
  version: '1.3.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'plugin',
    'typescript',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/revam/rollup-plugin-common',
    npm: 'https://www.npmjs.com/package/@revam/rollup-plugin-common',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 8,
    },
  },
})
