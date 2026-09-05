import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-enhanced-resolve',
  description: 'Resolve modules using webpack\'s [enhanced-resolve](https://github.com/webpack/enhanced-resolve).',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'resolve',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-enhanced-resolve',
  },
  stats: {
    downloads: {
      monthly: 73,
      weekly: 8,
    },
  },
})
