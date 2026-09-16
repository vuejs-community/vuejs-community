import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-enhanced-resolve',
  description: 'Resolve modules using webpack\'s [enhanced-resolve](https://github.com/webpack/enhanced-resolve).',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'resolve',
  ],
  source: {
    npm: 'rollup-plugin-enhanced-resolve',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-enhanced-resolve',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 66,
      weekly: 13,
    },
  },
})
