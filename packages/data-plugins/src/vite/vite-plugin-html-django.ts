import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-django',
  description: 'A vite plugin that generates html and assets for django templates',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'html',
    'django',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'madchester/vite-plugin-html-django',
    npm: 'vite-plugin-html-django',
  },
  links: {
    github: 'https://github.com/madchester/vite-plugin-html-django',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-django',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
