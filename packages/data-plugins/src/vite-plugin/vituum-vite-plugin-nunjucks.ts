import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-nunjucks',
  description: 'Vite plugin for Nunjucks, transforms njk templates into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nunjucks',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vite-plugin-nunjucks',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-nunjucks',
    website: 'https://github.com/vituum/vite-plugin-nunjucks#readme',
  },
  source: {
    github: 'vituum/vite-plugin-nunjucks',
    npm: '@vituum/vite-plugin-nunjucks',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 371,
      weekly: 96,
    },
  },
})
