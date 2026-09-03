import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-content',
  description: 'Rollup plugin to generate content and its summaries for i18n static sites',
  version: '0.8.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'rollup',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/stalniy/rollup-plugin-content',
    npm: 'https://www.npmjs.com/package/rollup-plugin-content',
  },
  stats: {
    downloads: {
      monthly: 300,
      weekly: 7,
    },
  },
})
