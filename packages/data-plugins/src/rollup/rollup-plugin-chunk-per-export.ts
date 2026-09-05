import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-chunk-per-export',
  description: 'Rollup plugin that ensures different exports are in different files for optimal tree-shaking',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/cprecioso/rollup-plugin-chunk-per-export',
    npm: 'https://www.npmjs.com/package/rollup-plugin-chunk-per-export',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 9,
    },
  },
})
