import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-relative-copy-zhong',
  description: 'Copy files and folders using Rollup. Base on vladshcherbin/rollup-plugin-copy, extended support dest relative folder.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'copy',
    'cp',
    'asset',
    'assets',
    'file',
    'files',
    'folder',
    'folders',
    'glob',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/lionzhong/rollup-plugin-copy',
    npm: 'https://www.npmjs.com/package/rollup-relative-copy-zhong',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
