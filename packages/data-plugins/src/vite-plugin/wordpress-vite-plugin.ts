import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wordpress-vite-plugin',
  description: 'Wordpress plugin for Vite.',
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
  source: {
    github: 'evo-mark/wordpress-vite-plugin',
    npm: 'wordpress-vite-plugin',
  },
  links: {
    github: 'https://github.com/evo-mark/wordpress-vite-plugin',
    npm: 'https://www.npmjs.com/package/wordpress-vite-plugin',
    website: 'https://github.com/evo-mark/wordpress-vite-plugin',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 208,
      weekly: 32,
    },
  },
})
