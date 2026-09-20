import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-relative-copy-zhong',
  description: 'Copy files and folders using Rollup. Base on vladshcherbin/rollup-plugin-copy, extended support dest relative folder.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/lionzhong/rollup-plugin-copy',
    npm: 'https://www.npmjs.com/package/rollup-relative-copy-zhong',
    website: 'https://github.com/lionzhong/rollup-plugin-copy#readme',
  },
  source: {
    github: 'lionzhong/rollup-plugin-copy',
    npm: 'rollup-relative-copy-zhong',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
