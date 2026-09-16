import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jacob-z/vite-plugin-html',
  description: 'A plugin for vite to minimize index.html and use EJS template syntax in index.html',
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
    github: 'vbenjs/vite-plugin-html',
    npm: '@jacob-z/vite-plugin-html',
  },
  links: {
    github: 'https://github.com/vbenjs/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/@jacob-z/vite-plugin-html',
    website: 'https://github.com/vbenjs/vite-plugin-html/tree/master/#readme',
  },
  stats: {
    stars: 688,
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
