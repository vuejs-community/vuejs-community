import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-strip',
  description: 'Remove debugger statements and functions like assert.equal and console.log from your code',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'modules',
    'debugging',
    'javascript',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-strip',
    website: 'https://github.com/rollup/plugins/tree/master/packages/strip#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-strip',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 296915,
      weekly: 69842,
    },
  },
})
