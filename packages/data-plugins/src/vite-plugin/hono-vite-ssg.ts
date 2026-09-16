import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hono/vite-ssg',
  description: 'Vite plugin to generate a static site from your Hono application',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hono',
    'vite-plugin',
  ],
  source: {
    github: 'honojs/vite-plugins',
    npm: '@hono/vite-ssg',
  },
  links: {
    github: 'https://github.com/honojs/vite-plugins',
    npm: 'https://www.npmjs.com/package/@hono/vite-ssg',
    website: 'https://github.com/honojs/vite-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8457,
      weekly: 1635,
    },
  },
})
