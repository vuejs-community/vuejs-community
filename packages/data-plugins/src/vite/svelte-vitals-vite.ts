import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@svelte-vitals/vite',
  description: 'Vite/SvelteKit plugin for svelte-vitals — analyzes prerendered HTML during vite build, plus a live dev dashboard.',
  version: '0.36.3',
  category: 'plugin',
  tags: [
    'svelte',
    'sveltekit',
    'seo',
    'vite-plugin',
    'svelte-vitals',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/oekazuma/svelte-vitals',
    npm: 'https://www.npmjs.com/package/@svelte-vitals/vite',
  },
  stats: {
    downloads: {
      monthly: 6557,
      weekly: 1299,
    },
  },
})
