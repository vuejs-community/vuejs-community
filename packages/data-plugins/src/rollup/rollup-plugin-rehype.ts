import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rehype',
  description: 'Rollup plugin for processing HTML files using Rehype',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rehype',
    'unified',
    'html',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/keplersj/rollup-plugin-rehype',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rehype',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
