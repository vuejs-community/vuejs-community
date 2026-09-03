import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sean-bunnings/rollup-plugin-html',
  description: 'HTML import plugin for rollup with updated html-minifier-terser to fix security issue',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'html',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/sean-bunnings/rollup-plugin-html',
    npm: 'https://www.npmjs.com/package/@sean-bunnings/rollup-plugin-html',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
