import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-alias-fork',
  description: 'Resolves aliases with Rollup',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/DavraYoung/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-alias-fork',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
