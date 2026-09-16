import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@capyseo/sveltekit',
  description: 'SvelteKit integration for Capyseo SEO analyzer - analyze pages during development and build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Capyseo/capyseo-sveltekit',
    npm: '@capyseo/sveltekit',
  },
  links: {
    github: 'https://github.com/Capyseo/capyseo-sveltekit',
    npm: 'https://www.npmjs.com/package/@capyseo/sveltekit',
    website: 'https://capyseo.dev',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
