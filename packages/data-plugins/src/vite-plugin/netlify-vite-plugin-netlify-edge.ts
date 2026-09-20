import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@netlify/vite-plugin-netlify-edge',
  description: 'Vite support for Netlify Edge Function',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/netlify/vite-plugin-netlify-edge',
    npm: 'https://www.npmjs.com/package/@netlify/vite-plugin-netlify-edge',
    website: 'https://github.com/netlify/vite-plugin-netlify-edge#readme',
  },
  source: {
    github: 'netlify/vite-plugin-netlify-edge',
    npm: '@netlify/vite-plugin-netlify-edge',
  },
  stats: {
    stars: 22,
    downloads: {
      monthly: 175,
      weekly: 35,
    },
  },
})
