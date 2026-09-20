import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-nodent',
  description: 'Rollup plugin for ES2017 async/await keywords',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'async',
    'await',
  ],
  links: {
    github: 'https://github.com/oligot/rollup-plugin-nodent',
    npm: 'https://www.npmjs.com/package/rollup-plugin-nodent',
    website: 'https://github.com/oligot/rollup-plugin-nodent#readme',
  },
  source: {
    github: 'oligot/rollup-plugin-nodent',
    npm: 'rollup-plugin-nodent',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 5379,
      weekly: 1429,
    },
  },
})
