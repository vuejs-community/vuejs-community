import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rehype',
  description: 'Rollup plugin for processing HTML files using Rehype',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'keplersj/rollup-plugin-rehype',
    npm: 'rollup-plugin-rehype',
  },
  links: {
    github: 'https://github.com/keplersj/rollup-plugin-rehype',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rehype',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
