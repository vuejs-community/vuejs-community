import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@netlify/vite-plugin-tanstack-start',
  description: 'Vite plugin for TanStack Start on Netlify',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'netlify',
    'tanstack',
    'tanstack-start',
    'vite-plugin',
    'dev',
    'build',
  ],
  links: {
    github: 'https://github.com/netlify/framework-adapters',
    npm: 'https://www.npmjs.com/package/@netlify/vite-plugin-tanstack-start',
    website: 'https://github.com/netlify/framework-adapters#readme',
  },
  source: {
    github: 'netlify/framework-adapters',
    npm: '@netlify/vite-plugin-tanstack-start',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 192143,
      weekly: 47209,
    },
  },
})
