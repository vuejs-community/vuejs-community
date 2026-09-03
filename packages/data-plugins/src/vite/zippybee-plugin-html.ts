import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zippybee/plugin-html',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '3.2.4',
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
    npm: 'https://www.npmjs.com/package/@zippybee/plugin-html',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 11,
    },
  },
})
