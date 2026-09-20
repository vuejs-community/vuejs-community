import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typesync',
  description: 'Auto-generate TypeScript client code from Flask routes and Python type annotations.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-typesync',
  },
  source: {
    npm: 'rollup-plugin-typesync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 5,
    },
  },
})
