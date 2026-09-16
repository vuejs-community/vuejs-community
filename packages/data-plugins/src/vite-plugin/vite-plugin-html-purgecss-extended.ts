import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-purgecss-extended',
  description: 'Purges CSS based on HTML output',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
  ],
  source: {
    github: 'neonpictures/vite-plugin-html-purgecss',
    npm: 'vite-plugin-html-purgecss-extended',
  },
  links: {
    github: 'https://github.com/neonpictures/vite-plugin-html-purgecss',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-purgecss-extended',
    website: 'https://github.com/neonpictures/vite-plugin-html-purgecss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
