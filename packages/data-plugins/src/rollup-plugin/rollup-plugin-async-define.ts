import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-async-define',
  description: 'A rollup plugin for async-define, a simple amd runner',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'amd',
    'plugin',
  ],
  source: {
    github: 'sithmel/rollup-plugin-async-define',
    npm: 'rollup-plugin-async-define',
  },
  links: {
    github: 'https://github.com/sithmel/rollup-plugin-async-define',
    npm: 'https://www.npmjs.com/package/rollup-plugin-async-define',
    website: 'https://github.com/sithmel/rollup-plugin-async-define#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
