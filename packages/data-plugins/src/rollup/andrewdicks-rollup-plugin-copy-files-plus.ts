import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@andrewdicks/rollup-plugin-copy-files-plus',
  description: 'Rollup plugin to copy all files/folders matching a glob.  Supports flattening, text replacement and renaming during packaging.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'copy',
    'copyPlus',
    'glob',
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/AndrewDicks/rollup-plugin-copy-files-plus',
    npm: 'https://www.npmjs.com/package/@andrewdicks/rollup-plugin-copy-files-plus',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
