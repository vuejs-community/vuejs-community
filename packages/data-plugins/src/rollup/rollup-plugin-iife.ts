import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-iife',
  description: 'Convert ES modules into IIFEs.',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'iife',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/eight04/rollup-plugin-iife',
    npm: 'https://www.npmjs.com/package/rollup-plugin-iife',
  },
  stats: {
    downloads: {
      monthly: 16446,
      weekly: 3712,
    },
  },
})
