import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-iife',
  description: 'Convert ES modules into IIFEs.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'eight04/rollup-plugin-iife',
    npm: 'rollup-plugin-iife',
  },
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
