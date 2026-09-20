import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@easythread/rollup',
  description: 'Rollup plugin for easythread - automatic Worker Thread generation for Node.js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'worker-threads',
    'nodejs',
    'easythread',
  ],
  links: {
    github: 'https://github.com/leka74/easythread',
    npm: 'https://www.npmjs.com/package/@easythread/rollup',
    website: 'https://github.com/leka74/easythread#readme',
  },
  source: {
    github: 'leka74/easythread',
    npm: '@easythread/rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 6,
    },
  },
})
