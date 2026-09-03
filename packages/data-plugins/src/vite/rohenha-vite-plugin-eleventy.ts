import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rohenha/vite-plugin-eleventy',
  description: 'Vite plugin to use Eleventy server to render HTML pages.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vitejs',
    'vite-plugin',
    'eleventy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rohenha/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/@rohenha/vite-plugin-eleventy',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
