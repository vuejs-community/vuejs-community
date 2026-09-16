import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-htmls',
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
    npm: 'vite-htmls',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-htmls',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
