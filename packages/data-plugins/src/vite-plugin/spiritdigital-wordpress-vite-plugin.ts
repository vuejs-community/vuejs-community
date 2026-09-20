import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@spiritdigital/wordpress-vite-plugin',
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
  links: {
    github: 'https://github.com/spiritdigitalagency/wordpress-vite-plugin',
    npm: 'https://www.npmjs.com/package/@spiritdigital/wordpress-vite-plugin',
    website: 'https://github.com/spiritdigitalagency/wordpress-vite-plugin',
  },
  source: {
    github: 'spiritdigitalagency/wordpress-vite-plugin',
    npm: '@spiritdigital/wordpress-vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 57,
      weekly: 11,
    },
  },
})
