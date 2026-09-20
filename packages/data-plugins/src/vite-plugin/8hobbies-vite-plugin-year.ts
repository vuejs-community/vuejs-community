import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@8hobbies/vite-plugin-year',
  description: 'A Vite plugin that inserts the current year to the HTML file during build. Useful for adding a copyright year to the HTML file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/8hobbies/vite-plugin-year',
    npm: 'https://www.npmjs.com/package/@8hobbies/vite-plugin-year',
    website: 'https://8hob.io/posts/add-copyright-year-vite-html/',
  },
  source: {
    github: '8hobbies/vite-plugin-year',
    npm: '@8hobbies/vite-plugin-year',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 234,
      weekly: 64,
    },
  },
})
