import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-size',
  description: 'A simple vite plugin that will log your bundle size.',
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
  links: {
    github: 'https://github.com/ehubbell/vite-plugin-size',
    npm: 'https://www.npmjs.com/package/vite-plugin-size',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 2,
    },
  },
})
