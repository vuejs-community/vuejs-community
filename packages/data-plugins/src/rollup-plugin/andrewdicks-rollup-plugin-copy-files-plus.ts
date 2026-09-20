import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@andrewdicks/rollup-plugin-copy-files-plus',
  description: 'Rollup plugin to copy all files/folders matching a glob.  Supports flattening, text replacement and renaming during packaging.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'copy',
    'copyPlus',
    'glob',
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/AndrewDicks/rollup-plugin-copy-files-plus',
    npm: 'https://www.npmjs.com/package/@andrewdicks/rollup-plugin-copy-files-plus',
    website: 'https://github.com/AndrewDicks/rollup-plugin-copy-files-plus#readme',
  },
  source: {
    github: 'AndrewDicks/rollup-plugin-copy-files-plus',
    npm: '@andrewdicks/rollup-plugin-copy-files-plus',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
