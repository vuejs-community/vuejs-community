import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sharp',
  description: 'A Vite plugin for image compression using sharp and svgo',
  version: '1.7.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sharp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-sharp',
  },
  stats: {
    downloads: {
      monthly: 350,
      weekly: 86,
    },
  },
})
