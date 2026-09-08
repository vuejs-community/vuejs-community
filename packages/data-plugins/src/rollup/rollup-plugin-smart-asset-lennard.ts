import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-smart-asset-lennard',
  description: 'Rollup plugin to rebase, inline or copy assets referenced from the code',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'sormy/rollup-plugin-smart-asset',
    npm: 'rollup-plugin-smart-asset-lennard',
  },
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
