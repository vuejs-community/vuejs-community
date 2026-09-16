import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zigar',
  description: 'Rollup plugin for transpiling Zig code',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'zig',
    'rollup-plugin',
  ],
  source: {
    github: 'chung-leong/zigar',
    npm: 'rollup-plugin-zigar',
  },
  links: {
    github: 'https://github.com/chung-leong/zigar',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zigar',
    website: 'https://github.com/chung-leong/zigar/wiki',
  },
  stats: {
    stars: 435,
    downloads: {
      monthly: 569,
      weekly: 166,
    },
  },
})
