import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zigar',
  description: 'Rollup plugin for transpiling Zig code',
  icon: 'logos:rollupjs',
  version: '0.16.0',
  category: 'plugin',
  tags: [
    'zig',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'chung-leong/zigar',
    npm: 'rollup-plugin-zigar',
  },
  links: {
    github: 'https://github.com/chung-leong/zigar',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zigar',
  },
  stats: {
    downloads: {
      monthly: 1003,
      weekly: 303,
    },
  },
})
