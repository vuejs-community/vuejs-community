import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-externals',
  description: 'Rollup plugin to declare dependencies external with reasonable defaults and customizable logic.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'external',
    'node',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-externals',
  },
  stats: {
    downloads: {
      monthly: 135,
      weekly: 56,
    },
  },
})
