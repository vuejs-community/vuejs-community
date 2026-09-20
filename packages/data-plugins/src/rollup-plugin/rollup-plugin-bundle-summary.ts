import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-summary',
  description: 'Output the bundle size of your build',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-summary',
  },
  source: {
    npm: 'rollup-plugin-bundle-summary',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 337,
      weekly: 43,
    },
  },
})
