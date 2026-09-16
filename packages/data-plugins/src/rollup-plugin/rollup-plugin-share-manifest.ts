import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-share-manifest',
  description: 'The Rollup plugin to share manifest between builds',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'manifest',
    'share-manifest',
  ],
  source: {
    github: 'kuoruan/rollup-plugin-share-manifest',
    npm: 'rollup-plugin-share-manifest',
  },
  links: {
    github: 'https://github.com/kuoruan/rollup-plugin-share-manifest',
    npm: 'https://www.npmjs.com/package/rollup-plugin-share-manifest',
    website: 'https://github.com/kuoruan/rollup-plugin-share-manifest#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
