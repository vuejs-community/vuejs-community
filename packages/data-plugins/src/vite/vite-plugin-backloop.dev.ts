import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-backloop.dev',
  description: 'Use backloop.dev for ViteJS development with https on localhost ',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'https',
    'localhost',
    'ViteJs',
    'local development',
    'SSL',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/perki/backloop.dev-vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-backloop.dev',
  },
  stats: {
    downloads: {
      monthly: 448,
      weekly: 289,
    },
  },
})
