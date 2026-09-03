import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'leaner-jsx',
  description: 'JSX transformer for Leaner.js',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'leaner',
    'jsx',
    'vite-plugin',
    'rollup-plugin',
    'rolldown-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/leaner-js/leaner',
    npm: 'https://www.npmjs.com/package/leaner-jsx',
  },
  stats: {
    downloads: {
      monthly: 163,
      weekly: 163,
    },
  },
})
