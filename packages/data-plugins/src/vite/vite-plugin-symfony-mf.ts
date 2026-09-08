import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-symfony-mf',
  description: 'A Vite plugin to integrate easily Vite in your Symfony application..',
  icon: 'logos:vite-icon',
  version: '4.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite',
    'symfony',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'lhapaipai/vite-plugin-symfony',
    npm: 'vite-plugin-symfony-mf',
  },
  links: {
    github: 'https://github.com/lhapaipai/vite-plugin-symfony',
    npm: 'https://www.npmjs.com/package/vite-plugin-symfony-mf',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
