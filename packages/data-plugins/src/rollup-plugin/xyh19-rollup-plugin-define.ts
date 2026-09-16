import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xyh19/rollup-plugin-define',
  description: 'Replace AST nodes while bundling',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'replace',
  ],
  source: {
    npm: '@xyh19/rollup-plugin-define',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xyh19/rollup-plugin-define',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
