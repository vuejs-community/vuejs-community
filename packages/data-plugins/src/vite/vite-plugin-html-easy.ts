import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-easy',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  version: '3.2.0',
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
    github: 'https://github.com/TengChongChong/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-easy',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
