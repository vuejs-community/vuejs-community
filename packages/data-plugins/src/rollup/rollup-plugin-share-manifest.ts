import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-share-manifest',
  description: 'The Rollup plugin to share manifest between builds',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'manifest',
    'share-manifest',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kuoruan/rollup-plugin-share-manifest',
    npm: 'https://www.npmjs.com/package/rollup-plugin-share-manifest',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
