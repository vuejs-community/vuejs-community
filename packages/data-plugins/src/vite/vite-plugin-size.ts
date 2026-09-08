import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-size',
  description: 'A simple vite plugin that will log your bundle size.',
  icon: 'logos:vite-icon',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-library',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ehubbell/vite-plugin-size',
    npm: 'vite-plugin-size',
  },
  links: {
    github: 'https://github.com/ehubbell/vite-plugin-size',
    npm: 'https://www.npmjs.com/package/vite-plugin-size',
  },
  stats: {
    downloads: {
      monthly: 67,
      weekly: 3,
    },
  },
})
