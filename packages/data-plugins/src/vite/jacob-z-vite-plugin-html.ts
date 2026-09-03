import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jacob-z/vite-plugin-html',
  description: 'A plugin for vite to minimize index.html and use EJS template syntax in index.html',
  version: '1.0.0',
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
    github: 'https://github.com/vbenjs/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/@jacob-z/vite-plugin-html',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
