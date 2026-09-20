import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-asset-sync',
  description: 'Asset files synchronization for rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'asset',
    'sync',
    'copy',
  ],
  links: {
    github: 'https://github.com/rosenbjerg/rollup-plugin-asset-sync',
    npm: 'https://www.npmjs.com/package/rollup-plugin-asset-sync',
    website: 'https://github.com/rosenbjerg/rollup-plugin-asset-sync',
  },
  source: {
    github: 'rosenbjerg/rollup-plugin-asset-sync',
    npm: 'rollup-plugin-asset-sync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
