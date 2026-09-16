import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bytenode',
  description: 'Rollup plugin for compile javascript code to byte code',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'bytenode',
    'nodejs',
  ],
  source: {
    github: 'jakexchan/rollup-plugin-bytenode',
    npm: 'rollup-plugin-bytenode',
  },
  links: {
    github: 'https://github.com/jakexchan/rollup-plugin-bytenode',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bytenode',
    website: 'https://github.com/jakexchan/rollup-plugin-bytenode#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
