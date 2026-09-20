import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@van1s1mys/ai-router-plugin-vite',
  description: 'Vite plugin for ai-router — auto-scan pages and generate route config',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ai-router',
  ],
  links: {
    github: 'https://github.com/IvanMalkS/ai-router',
    npm: 'https://www.npmjs.com/package/@van1s1mys/ai-router-plugin-vite',
    website: 'https://ivanmalks.github.io/ai-router/',
  },
  source: {
    github: 'IvanMalkS/ai-router',
    npm: '@van1s1mys/ai-router-plugin-vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 17,
      weekly: 8,
    },
  },
})
