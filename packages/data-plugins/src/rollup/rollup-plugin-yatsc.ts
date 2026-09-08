import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-yatsc',
  description: 'yet another rollup plugin for typescript',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'typescript',
    'tsc',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'db-developer/rollup-plugin-yatsc',
    npm: 'rollup-plugin-yatsc',
  },
  links: {
    github: 'https://github.com/db-developer/rollup-plugin-yatsc',
    npm: 'https://www.npmjs.com/package/rollup-plugin-yatsc',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
