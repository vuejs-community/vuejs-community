import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@arakmar/vite-plugin-symfony',
  description: 'A Vite plugin to integrate easily Vite in your Symfony application',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite',
    'symfony',
  ],
  source: {
    github: 'lhapaipai/vite-plugin-symfony',
    npm: '@arakmar/vite-plugin-symfony',
  },
  links: {
    github: 'https://github.com/lhapaipai/vite-plugin-symfony',
    npm: 'https://www.npmjs.com/package/@arakmar/vite-plugin-symfony',
    website: 'https://symfony-vite.pentatrion.com',
  },
  stats: {
    stars: 57,
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
