import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-smart-asset',
  description: 'Rollup plugin to rebase, inline or copy assets referenced from the code',
  icon: 'logos:rollupjs',
  version: '2.1.2',
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
    npm: 'rollup-plugin-smart-asset',
  },
  links: {
    github: 'https://github.com/sormy/rollup-plugin-smart-asset',
    npm: 'https://www.npmjs.com/package/rollup-plugin-smart-asset',
  },
  stats: {
    downloads: {
      monthly: 77673,
      weekly: 22888,
    },
  },
})
