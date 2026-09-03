import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-purgecss-extended',
  description: 'Purges CSS based on HTML output',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/neonpictures/vite-plugin-html-purgecss',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-purgecss-extended',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
