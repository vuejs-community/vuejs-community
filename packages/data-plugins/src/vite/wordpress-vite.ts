import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'wordpress-vite',
  description: 'WordPress plugin for Vite.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'wordpress',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/matthiasclaessen/wordpress-vite-plugin',
    npm: 'https://www.npmjs.com/package/wordpress-vite',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 9,
    },
  },
})
