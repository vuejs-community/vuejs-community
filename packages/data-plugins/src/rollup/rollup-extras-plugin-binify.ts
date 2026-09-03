import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-binify',
  description: 'plugin to create cli packages during rollup build',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    '@rollup-extras',
    'rollup-plugin',
    'binify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-binify',
  },
  stats: {
    downloads: {
      monthly: 133,
      weekly: 37,
    },
  },
})
