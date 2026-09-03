import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vercel-adapter',
  description: 'A Vite plugin for Vercel Build Output API v3',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vercel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/oscartbeaumont/vite-plugin-vercel-adapter',
    npm: 'https://www.npmjs.com/package/vite-plugin-vercel-adapter',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
