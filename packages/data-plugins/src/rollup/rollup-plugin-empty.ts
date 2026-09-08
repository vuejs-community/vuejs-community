import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-empty',
  description: 'A rollup plugin for emptying dir or deleting files',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'empty',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'fengxinming/rollup-plugins',
    npm: 'rollup-plugin-empty',
  },
  links: {
    github: 'https://github.com/fengxinming/rollup-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-empty',
  },
  stats: {
    downloads: {
      monthly: 119,
      weekly: 8,
    },
  },
})
