import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-size',
  description: 'A simple vite plugin that will log your bundle size.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-library',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ehubbell/vite-plugin-size',
    npm: 'https://www.npmjs.com/package/vite-plugin-size',
    website: 'https://github.com/ehubbell/vite-plugin-size#readme',
  },
  source: {
    github: 'ehubbell/vite-plugin-size',
    npm: 'vite-plugin-size',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 22,
      weekly: 16,
    },
  },
})
