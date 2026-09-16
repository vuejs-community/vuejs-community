import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-smart-asset',
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
  source: {
    github: 'sormy/rollup-plugin-smart-asset',
    npm: 'rollup-plugin-smart-asset',
  },
  links: {
    github: 'https://github.com/sormy/rollup-plugin-smart-asset',
    npm: 'https://www.npmjs.com/package/rollup-plugin-smart-asset',
    website: 'https://github.com/sormy/rollup-plugin-smart-asset#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 68392,
      weekly: 11031,
    },
  },
})
