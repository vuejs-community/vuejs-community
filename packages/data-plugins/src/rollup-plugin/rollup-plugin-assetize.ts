import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-assetize',
  description: 'A small rollup plugin for put assets in place.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'assets',
  ],
  source: {
    github: 'tsne/rollup-plugin-assetize',
    npm: 'rollup-plugin-assetize',
  },
  links: {
    github: 'https://github.com/tsne/rollup-plugin-assetize',
    npm: 'https://www.npmjs.com/package/rollup-plugin-assetize',
    website: 'https://github.com/tsne/rollup-plugin-assetize',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
