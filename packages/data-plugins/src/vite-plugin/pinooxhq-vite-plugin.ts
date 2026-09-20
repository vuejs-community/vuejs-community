import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pinooxhq/vite-plugin',
  description: 'Vite plugin for Pinoox themes — dev state, dev proxy, Twig refresh',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pinoox',
    'vite',
    'vite-plugin',
    'hmvc',
  ],
  links: {
    github: 'https://github.com/pinoox/vite-plugin',
    npm: 'https://www.npmjs.com/package/@pinooxhq/vite-plugin',
    website: 'https://github.com/pinoox/vite-plugin#readme',
  },
  source: {
    github: 'pinoox/vite-plugin',
    npm: '@pinooxhq/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 44,
      weekly: 6,
    },
  },
})
