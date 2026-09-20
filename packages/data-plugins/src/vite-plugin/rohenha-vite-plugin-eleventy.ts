import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rohenha/vite-plugin-eleventy',
  description: 'Vite plugin to use Eleventy server to render HTML pages.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitejs',
    'vite-plugin',
    'eleventy',
  ],
  links: {
    github: 'https://github.com/rohenha/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/@rohenha/vite-plugin-eleventy',
    website: 'https://github.com/rohenha/vite-plugin-eleventy#readme',
  },
  source: {
    github: 'rohenha/vite-plugin-eleventy',
    npm: '@rohenha/vite-plugin-eleventy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
