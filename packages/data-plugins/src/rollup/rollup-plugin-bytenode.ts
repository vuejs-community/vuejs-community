import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bytenode',
  description: 'Rollup plugin for compile javascript code to byte code',
  icon: 'logos:rollupjs',
  version: '0.1.0-alpha.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'bytenode',
    'nodejs',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jakexchan/rollup-plugin-bytenode',
    npm: 'rollup-plugin-bytenode',
  },
  links: {
    github: 'https://github.com/jakexchan/rollup-plugin-bytenode',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bytenode',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 5,
    },
  },
})
