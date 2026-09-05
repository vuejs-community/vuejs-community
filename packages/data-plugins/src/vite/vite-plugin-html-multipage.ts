import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-multipage',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '1.0.2',
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
    github: 'https://github.com/DraculaPrince/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-multipage',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
