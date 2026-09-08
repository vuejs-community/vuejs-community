import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-moon',
  description: 'Rollup plugin for Moon',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'moon',
    'rollup',
    'plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'kbrsh/rollup-plugin-moon',
    npm: 'rollup-plugin-moon',
  },
  links: {
    github: 'https://github.com/kbrsh/rollup-plugin-moon',
    npm: 'https://www.npmjs.com/package/rollup-plugin-moon',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
