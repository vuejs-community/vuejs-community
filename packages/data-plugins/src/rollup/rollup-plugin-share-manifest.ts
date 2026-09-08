import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-share-manifest',
  description: 'The Rollup plugin to share manifest between builds',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'kuoruan/rollup-plugin-share-manifest',
    npm: 'rollup-plugin-share-manifest',
  },
  links: {
    github: 'https://github.com/kuoruan/rollup-plugin-share-manifest',
    npm: 'https://www.npmjs.com/package/rollup-plugin-share-manifest',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 3,
    },
  },
})
