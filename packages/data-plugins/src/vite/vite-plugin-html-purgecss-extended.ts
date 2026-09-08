import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-purgecss-extended',
  description: 'Purges CSS based on HTML output',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'neonpictures/vite-plugin-html-purgecss',
    npm: 'vite-plugin-html-purgecss-extended',
  },
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
