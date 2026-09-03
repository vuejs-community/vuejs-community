import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-serve',
  description: 'Rollup plugin for dev server based on Hono.',
  version: '2.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'server',
    'serve',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-serve',
  },
  stats: {
    downloads: {
      monthly: 88,
      weekly: 4,
    },
  },
})
