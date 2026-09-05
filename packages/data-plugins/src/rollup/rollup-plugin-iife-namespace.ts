import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-iife-namespace',
  description: 'export iife library to a global namespace',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'iife',
    'namespace',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-iife-namespace',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
