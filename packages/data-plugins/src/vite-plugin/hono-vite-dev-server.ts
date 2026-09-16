import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hono/vite-dev-server',
  description: 'Vite dev-server plugin for Hono',
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
    npm: '@hono/vite-dev-server',
  },
  links: {
    github: 'https://github.com/honojs/vite-plugins',
    npm: 'https://www.npmjs.com/package/@hono/vite-dev-server',
    website: 'https://github.com/honojs/vite-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 794768,
      weekly: 177307,
    },
  },
})
