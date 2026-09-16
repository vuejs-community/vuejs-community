import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@selfagency/stately',
  description: 'Pinia-inspired state management for Svelte 5 and SvelteKit with persistence, history, sync, and async orchestration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'state management',
    'store',
    'reactivity',
    'persistence',
    'history',
    'time travel',
    'sync',
    'collaboration',
    'inspector',
    'vite-plugin',
  ],
  source: {
    github: 'selfagency/stately',
    npm: '@selfagency/stately',
  },
  links: {
    github: 'https://github.com/selfagency/stately',
    npm: 'https://www.npmjs.com/package/@selfagency/stately',
    website: 'https://stately.self.agency/',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 120,
      weekly: 7,
    },
  },
})
