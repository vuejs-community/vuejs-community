import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vercel-adapter',
  description: 'A Vite plugin for Vercel Build Output API v3',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vercel',
  ],
  source: {
    github: 'oscartbeaumont/vite-plugin-vercel-adapter',
    npm: 'vite-plugin-vercel-adapter',
  },
  links: {
    github: 'https://github.com/oscartbeaumont/vite-plugin-vercel-adapter',
    npm: 'https://www.npmjs.com/package/vite-plugin-vercel-adapter',
    website: 'https://github.com/oscartbeaumont/vite-plugin-vercel-adapter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
