import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@8hobbies/vite-plugin-year',
  description: 'A Vite plugin that inserts the current year to the HTML file during build. Useful for adding a copyright year to the HTML file.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/8hobbies/vite-plugin-year',
    npm: 'https://www.npmjs.com/package/@8hobbies/vite-plugin-year',
  },
  stats: {
    downloads: {
      monthly: 196,
      weekly: 69,
    },
  },
})
