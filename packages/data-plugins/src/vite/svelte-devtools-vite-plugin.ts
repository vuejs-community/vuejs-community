import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@svelte-devtools/vite-plugin',
  description: 'Vite plugin that adds a development overlay for inspecting Svelte 5 and SvelteKit apps',
  version: '0.1.7',
  category: 'plugin',
  tags: [
    'svelte',
    'svelte5',
    'sveltekit',
    'devtools',
    'vite',
    'vite-plugin',
    'debug',
    'inspector',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chrislentz/svelte-devtools',
    npm: 'https://www.npmjs.com/package/@svelte-devtools/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 75,
      weekly: 19,
    },
  },
})
