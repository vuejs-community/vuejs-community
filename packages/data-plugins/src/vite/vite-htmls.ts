import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-htmls',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '1.1.7',
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
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-htmls',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 5,
    },
  },
})
