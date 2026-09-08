import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-quello',
  description: 'Vite plugin that injects quello, the visual element picker for AI coding agents.',
  icon: 'logos:vite-icon',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'quello',
    'ai',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Linko91/quello',
    npm: 'vite-plugin-quello',
  },
  links: {
    github: 'https://github.com/Linko91/quello',
    npm: 'https://www.npmjs.com/package/vite-plugin-quello',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 34,
    },
  },
})
