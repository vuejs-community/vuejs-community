import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@netlify/vite-plugin',
  description: 'Vite plugin with a local emulation of the Netlify environment',
  version: '3.0.1',
  category: 'plugin',
  tags: [
    'netlify',
    'vite-plugin',
    'dev',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/netlify/framework-adapters',
    npm: 'https://www.npmjs.com/package/@netlify/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 569734,
      weekly: 156440,
    },
  },
})
