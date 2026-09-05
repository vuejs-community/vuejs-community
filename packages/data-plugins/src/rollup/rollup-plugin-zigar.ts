import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zigar',
  description: 'Rollup plugin for transpiling Zig code',
  version: '0.15.3',
  category: 'plugin',
  tags: [
    'zig',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/chung-leong/zigar',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zigar',
  },
  stats: {
    downloads: {
      monthly: 885,
      weekly: 22,
    },
  },
})
