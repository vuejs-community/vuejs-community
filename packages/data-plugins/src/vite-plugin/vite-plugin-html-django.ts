import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-django',
  description: 'A vite plugin that generates html and assets for django templates',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'html',
    'django',
  ],
  links: {
    github: 'https://github.com/madchester/vite-plugin-html-django',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-django',
  },
  source: {
    github: 'madchester/vite-plugin-html-django',
    npm: 'vite-plugin-html-django',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
