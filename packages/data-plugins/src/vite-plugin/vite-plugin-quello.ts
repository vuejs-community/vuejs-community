import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-quello',
  description: 'Vite plugin that injects quello, the visual element picker for AI coding agents.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'quello',
    'ai',
    'devtools',
  ],
  source: {
    github: 'Linko91/quello',
    npm: 'vite-plugin-quello',
  },
  links: {
    github: 'https://github.com/Linko91/quello',
    npm: 'https://www.npmjs.com/package/vite-plugin-quello',
    website: 'https://quello-docs.vercel.app',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 84,
      weekly: 58,
    },
  },
})
