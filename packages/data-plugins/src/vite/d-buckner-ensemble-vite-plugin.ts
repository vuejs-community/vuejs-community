import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@d-buckner/ensemble-vite-plugin',
  description: 'Vite plugin for Ensemble actor threading with Web Workers',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'actor',
    'web-workers',
    'threading',
    'bundler',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/d-buckner/ensemble',
    npm: 'https://www.npmjs.com/package/@d-buckner/ensemble-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 7,
    },
  },
})
