import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-smart-asset-lennard',
  description: 'Rollup plugin to rebase, inline or copy assets referenced from the code',
  version: '1.1.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'asset',
    'rebase',
    'url',
    'copy',
    'inline',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/sormy/rollup-plugin-smart-asset',
    npm: 'https://www.npmjs.com/package/rollup-plugin-smart-asset-lennard',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 8,
    },
  },
})
