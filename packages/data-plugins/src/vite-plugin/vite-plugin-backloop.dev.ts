import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-backloop.dev',
  description: 'Use backloop.dev for ViteJS development with https on localhost ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'https',
    'localhost',
    'ViteJs',
    'local development',
    'SSL',
  ],
  links: {
    github: 'https://github.com/perki/backloop.dev-vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-backloop.dev',
    website: 'https://github.com/perki/backloop.dev-vite',
  },
  source: {
    github: 'perki/backloop.dev-vite',
    npm: 'vite-plugin-backloop.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1049,
      weekly: 90,
    },
  },
})
