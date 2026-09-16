import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-smart-asset-lennard',
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
    npm: 'rollup-plugin-smart-asset-lennard',
  },
  links: {
    github: 'https://github.com/sormy/rollup-plugin-smart-asset',
    npm: 'https://www.npmjs.com/package/rollup-plugin-smart-asset-lennard',
    website: 'https://github.com/sormy/rollup-plugin-smart-asset#readme',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
