import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@capyseo/sveltekit',
  description: 'SvelteKit integration for Capyseo SEO analyzer - analyze pages during development and build',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'seo',
    'sveltekit',
    'svelte',
    'vite',
    'vite-plugin',
    'analyzer',
    'seo-analyzer',
    'meta-tags',
    'accessibility',
    'web-vitals',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Capyseo/capyseo-sveltekit',
    npm: 'https://www.npmjs.com/package/@capyseo/sveltekit',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 10,
    },
  },
})
