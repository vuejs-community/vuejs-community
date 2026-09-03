import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-html',
  description: 'Rollup plugin to inject assets names into html template.',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'html',
    'bundle',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-html',
  },
  stats: {
    downloads: {
      monthly: 90,
      weekly: 6,
    },
  },
})
