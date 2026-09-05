import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-asset-sync',
  description: 'Asset files synchronization for rollup',
  version: '0.0.7',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'asset',
    'sync',
    'copy',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rosenbjerg/rollup-plugin-asset-sync',
    npm: 'https://www.npmjs.com/package/rollup-plugin-asset-sync',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
