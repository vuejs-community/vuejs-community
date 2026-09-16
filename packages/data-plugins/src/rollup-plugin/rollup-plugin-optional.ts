import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-optional',
  description: 'Conditionally keep and remove code to adapt difference platform!',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
  ],
  source: {
    npm: 'rollup-plugin-optional',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-optional',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
