import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mopo/vite-plugin-html',
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
    npm: '@mopo/vite-plugin-html',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@mopo/vite-plugin-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
