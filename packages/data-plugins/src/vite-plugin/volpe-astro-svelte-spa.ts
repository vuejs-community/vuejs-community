import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@volpe/astro-svelte-spa',
  description: 'Vite plugin for file-based routing with svelte5-router in Astro',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'astro',
    'svelte',
    'svelte5-router',
    'spa',
    'file-based-routing',
  ],
  source: {
    npm: '@volpe/astro-svelte-spa',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@volpe/astro-svelte-spa',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 44,
      weekly: 11,
    },
  },
})
