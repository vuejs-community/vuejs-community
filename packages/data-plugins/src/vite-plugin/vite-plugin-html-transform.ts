import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-transform',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-html-transform',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-html-transform',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 253,
      weekly: 28,
    },
  },
})
