import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@thatsgolden/vite-plugin-html',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '3.2.0-gamma',
  category: 'plugin',
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/littlegolden/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/@thatsgolden/vite-plugin-html',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
