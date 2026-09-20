import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-chunk-per-export',
  description: 'Rollup plugin that ensures different exports are in different files for optimal tree-shaking',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/cprecioso/rollup-plugin-chunk-per-export',
    npm: 'https://www.npmjs.com/package/rollup-plugin-chunk-per-export',
    website: 'https://github.com/cprecioso/rollup-plugin-chunk-per-export#readme',
  },
  source: {
    github: 'cprecioso/rollup-plugin-chunk-per-export',
    npm: 'rollup-plugin-chunk-per-export',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
