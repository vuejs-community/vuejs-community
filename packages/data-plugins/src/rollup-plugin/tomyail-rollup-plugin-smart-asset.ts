import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tomyail/rollup-plugin-smart-asset',
  description: 'Rollup plugin to rebase, inline or copy assets referenced from the code',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'asset',
    'rebase',
    'url',
    'copy',
    'inline',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@tomyail/rollup-plugin-smart-asset',
  },
  source: {
    npm: '@tomyail/rollup-plugin-smart-asset',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
