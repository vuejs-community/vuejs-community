import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hono/vite-ssg',
  description: 'Vite plugin to generate a static site from your Hono application',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'hono',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/honojs/vite-plugins',
    npm: 'https://www.npmjs.com/package/@hono/vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 12109,
      weekly: 1770,
    },
  },
})
