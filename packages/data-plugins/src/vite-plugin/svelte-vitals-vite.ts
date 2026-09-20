import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svelte-vitals/vite',
  description: 'Vite/SvelteKit plugin for svelte-vitals — analyzes prerendered HTML during vite build, plus a live dev dashboard.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'seo',
    'vite-plugin',
    'svelte-vitals',
  ],
  links: {
    github: 'https://github.com/oekazuma/svelte-vitals',
    npm: 'https://www.npmjs.com/package/@svelte-vitals/vite',
    website: 'https://github.com/oekazuma/svelte-vitals#readme',
  },
  source: {
    github: 'oekazuma/svelte-vitals',
    npm: '@svelte-vitals/vite',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 4257,
      weekly: 603,
    },
  },
})
