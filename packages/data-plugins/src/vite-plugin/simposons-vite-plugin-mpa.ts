import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@simposons/vite-plugin-mpa',
  description: 'A Vite plugin for Multi-Page Applications (MPA) with shared entry and auto-scanning',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mpa',
    'multi-page',
    'multi-entry',
    'html',
  ],
  source: {
    github: 'simposons/vite-plugin-mpa',
    npm: '@simposons/vite-plugin-mpa',
  },
  links: {
    github: 'https://github.com/simposons/vite-plugin-mpa',
    npm: 'https://www.npmjs.com/package/@simposons/vite-plugin-mpa',
    website: 'https://github.com/simposons/vite-plugin-mpa#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 53,
      weekly: 3,
    },
  },
})
