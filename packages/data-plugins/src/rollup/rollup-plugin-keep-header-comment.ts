import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-keep-header-comment',
  description: 'A rollup plugin to keep the header comments from source in the declaration file',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'comment',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/peachest/rollup-plugin-keep-header-comment',
    npm: 'https://www.npmjs.com/package/rollup-plugin-keep-header-comment',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
