import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@netlify/vite-plugin',
  description: 'Vite plugin with a local emulation of the Netlify environment',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'netlify',
    'vite-plugin',
    'dev',
  ],
  links: {
    github: 'https://github.com/netlify/framework-adapters',
    npm: 'https://www.npmjs.com/package/@netlify/vite-plugin',
    website: 'https://github.com/netlify/framework-adapters#readme',
  },
  source: {
    github: 'netlify/framework-adapters',
    npm: '@netlify/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 524623,
      weekly: 112967,
    },
  },
})
