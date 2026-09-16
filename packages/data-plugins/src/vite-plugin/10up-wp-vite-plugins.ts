import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@10up/wp-vite-plugins',
  description: 'Vite plugins for building modern WordPress projects the 10up way.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rolldown',
    'wordpress',
    'gutenberg',
    '10up',
  ],
  source: {
    github: '10up/wp-vite-plugins',
    npm: '@10up/wp-vite-plugins',
  },
  links: {
    github: 'https://github.com/10up/wp-vite-plugins',
    npm: 'https://www.npmjs.com/package/@10up/wp-vite-plugins',
    website: 'https://github.com/10up/wp-vite-plugins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 353,
      weekly: 64,
    },
  },
})
