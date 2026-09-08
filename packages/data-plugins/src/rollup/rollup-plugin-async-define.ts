import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-async-define',
  description: 'A rollup plugin for async-define, a simple amd runner',
  icon: 'logos:rollupjs',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'amd',
    'plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'sithmel/rollup-plugin-async-define',
    npm: 'rollup-plugin-async-define',
  },
  links: {
    github: 'https://github.com/sithmel/rollup-plugin-async-define',
    npm: 'https://www.npmjs.com/package/rollup-plugin-async-define',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
