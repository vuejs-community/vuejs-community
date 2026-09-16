import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-webworker-plugin',
  description: '',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'webworker code splicing',
  ],
  source: {
    npm: 'rollup-webworker-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-webworker-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
