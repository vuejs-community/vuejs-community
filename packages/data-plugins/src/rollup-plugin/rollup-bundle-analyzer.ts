import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-bundle-analyzer',
  description: '',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bundle-analyzer',
  ],
  source: {
    npm: 'rollup-bundle-analyzer',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-bundle-analyzer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
