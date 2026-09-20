import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-patel',
  description: 'Integration between Rollup and PatEL.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'PatEL',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-patel',
  },
  source: {
    npm: 'rollup-plugin-patel',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
