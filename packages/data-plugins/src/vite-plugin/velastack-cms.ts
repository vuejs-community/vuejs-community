import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@velastack/cms',
  description: 'A scope-aware CMS for SvelteKit, for static or dynamic sites.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'cms',
    'content',
    'editing',
    'vite-plugin',
    'velastack',
  ],
  links: {
    github: 'https://github.com/velastack/cms',
    npm: 'https://www.npmjs.com/package/@velastack/cms',
    website: 'https://github.com/velastack/cms#readme',
  },
  source: {
    github: 'velastack/cms',
    npm: '@velastack/cms',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 613,
      weekly: 87,
    },
  },
})
