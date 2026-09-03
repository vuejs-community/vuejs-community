import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-source',
  description: 'A rollup plugin for the npm inline-source tool that inlines flagged js, css, and img sources in html',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'es2015',
    'inline',
    'inline-source',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/liam-swinney/rollup-plugin-inline-source',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-source',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
