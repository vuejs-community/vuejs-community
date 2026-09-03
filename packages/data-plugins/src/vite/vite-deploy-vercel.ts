import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-deploy/vercel',
  description: 'Deploy your Vite project to Vercel.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'adapter',
    'vercel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/web-runes/vite-deploy',
    npm: 'https://www.npmjs.com/package/@vite-deploy/vercel',
  },
  stats: {
    downloads: {
      monthly: 260,
      weekly: 28,
    },
  },
})
