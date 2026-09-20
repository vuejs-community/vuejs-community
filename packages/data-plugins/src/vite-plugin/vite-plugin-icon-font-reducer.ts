import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-icon-font-reducer',
  description: 'Reduce icon font files automatically during Vite builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'fonts',
    'icons',
    'subset',
    'fontawesome',
  ],
  links: {
    github: 'https://github.com/ArielLeyva/icon-font-reducer-vite-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-icon-font-reducer',
    website: 'https://github.com/ArielLeyva/icon-font-reducer-vite-plugin#readme',
  },
  source: {
    github: 'ArielLeyva/icon-font-reducer-vite-plugin',
    npm: 'vite-plugin-icon-font-reducer',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 29,
      weekly: 5,
    },
  },
})
