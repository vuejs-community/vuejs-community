import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-icon-font-reducer',
  description: 'Reduce icon font files automatically during Vite builds.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'fonts',
    'icons',
    'subset',
    'fontawesome',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ArielLeyva/icon-font-reducer-vite-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-icon-font-reducer',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 9,
    },
  },
})
