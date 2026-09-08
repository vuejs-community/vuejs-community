import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-assetize',
  description: 'A small rollup plugin for put assets in place.',
  icon: 'logos:rollupjs',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'assets',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'tsne/rollup-plugin-assetize',
    npm: 'rollup-plugin-assetize',
  },
  links: {
    github: 'https://github.com/tsne/rollup-plugin-assetize',
    npm: 'https://www.npmjs.com/package/rollup-plugin-assetize',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 8,
    },
  },
})
