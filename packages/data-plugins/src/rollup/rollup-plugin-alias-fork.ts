import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-alias-fork',
  description: 'Resolves aliases with Rollup',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'DavraYoung/rollup-plugin-alias',
    npm: 'rollup-plugin-alias-fork',
  },
  links: {
    github: 'https://github.com/DavraYoung/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-alias-fork',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 8,
    },
  },
})
