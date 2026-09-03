import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-bien',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '3.2.2',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-html-bien',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
