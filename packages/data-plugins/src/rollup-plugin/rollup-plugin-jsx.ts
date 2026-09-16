import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsx',
  description: 'Rollup jsx plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'jsx',
    'react',
  ],
  source: {
    github: 'konsumer/rollup-plugin-jsx',
    npm: 'rollup-plugin-jsx',
  },
  links: {
    github: 'https://github.com/konsumer/rollup-plugin-jsx',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsx',
    website: 'https://github.com/konsumer/rollup-plugin-jsx#readme',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 3789,
      weekly: 1245,
    },
  },
})
