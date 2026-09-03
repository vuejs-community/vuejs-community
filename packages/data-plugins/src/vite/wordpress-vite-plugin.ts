import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'wordpress-vite-plugin',
  description: 'Wordpress plugin for Vite.',
  version: '1.6.0',
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
    github: 'https://github.com/evo-mark/wordpress-vite-plugin',
    npm: 'https://www.npmjs.com/package/wordpress-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 175,
      weekly: 38,
    },
  },
})
