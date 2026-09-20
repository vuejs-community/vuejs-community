import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hono/vite-build',
  description: 'Vite plugin to build your Hono app',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hono',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/honojs/vite-plugins',
    npm: 'https://www.npmjs.com/package/@hono/vite-build',
    website: 'https://github.com/honojs/vite-plugins',
  },
  source: {
    github: 'honojs/vite-plugins',
    npm: '@hono/vite-build',
  },
  stats: {
    stars: 290,
    downloads: {
      monthly: 523166,
      weekly: 138128,
    },
  },
})
