import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typesync',
  description: 'Auto-generate TypeScript client code from Flask routes and Python type annotations.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typesync',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 10,
    },
  },
})
