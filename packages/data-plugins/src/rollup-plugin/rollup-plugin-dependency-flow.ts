import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dependency-flow',
  description: 'Visualize rollup module dependency flow',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    npm: 'rollup-plugin-dependency-flow',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-dependency-flow',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 318,
      weekly: 73,
    },
  },
})
