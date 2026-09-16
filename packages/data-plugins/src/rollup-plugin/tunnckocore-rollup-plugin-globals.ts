import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tunnckocore/rollup-plugin-globals',
  description: 'insert the same globals browserify does',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    npm: '@tunnckocore/rollup-plugin-globals',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tunnckocore/rollup-plugin-globals',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
