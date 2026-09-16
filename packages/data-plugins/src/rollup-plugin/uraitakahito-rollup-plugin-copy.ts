import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uraitakahito/rollup-plugin-copy',
  description: 'Watching targets, copy files and folders using Rollup. This is a variant of the rollup-plugin-copy. It is recommended to use the original plugin unless this variant is specifically needed.',
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
  source: {
    github: 'uraitakahito/rollup-plugin-copy',
    npm: '@uraitakahito/rollup-plugin-copy',
  },
  links: {
    github: 'https://github.com/uraitakahito/rollup-plugin-copy',
    npm: 'https://www.npmjs.com/package/@uraitakahito/rollup-plugin-copy',
    website: 'https://github.com/uraitakahito/rollup-plugin-copy#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 8,
    },
  },
})
