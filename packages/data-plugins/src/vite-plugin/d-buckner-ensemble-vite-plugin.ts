import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@d-buckner/ensemble-vite-plugin',
  description: 'Vite plugin for Ensemble actor threading with Web Workers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'actor',
    'web-workers',
    'threading',
    'bundler',
    'typescript',
  ],
  links: {
    github: 'https://github.com/d-buckner/ensemble',
    npm: 'https://www.npmjs.com/package/@d-buckner/ensemble-vite-plugin',
    website: 'https://github.com/d-buckner/ensemble#readme',
  },
  source: {
    github: 'd-buckner/ensemble',
    npm: '@d-buckner/ensemble-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
