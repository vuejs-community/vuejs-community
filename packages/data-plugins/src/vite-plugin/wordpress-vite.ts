import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wordpress-vite',
  description: 'WordPress plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'wordpress',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/matthiasclaessen/wordpress-vite-plugin',
    npm: 'https://www.npmjs.com/package/wordpress-vite',
    website: 'https://github.com/matthiasclaessen/wordpress-vite-plugin',
  },
  source: {
    github: 'matthiasclaessen/wordpress-vite-plugin',
    npm: 'wordpress-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 7,
    },
  },
})
