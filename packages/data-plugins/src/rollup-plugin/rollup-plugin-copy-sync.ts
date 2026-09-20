import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-copy-sync',
  description: 'Copy files and folders using Rollup',
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
    github: 'https://github.com/vineshkumar87/rollup-plugin-copy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-copy-sync',
    website: 'https://github.com/vineshkumar87/rollup-plugin-copy#readme',
  },
  source: {
    github: 'vineshkumar87/rollup-plugin-copy',
    npm: 'rollup-plugin-copy-sync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
