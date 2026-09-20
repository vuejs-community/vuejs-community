import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svelte-devtools/vite-plugin',
  description: 'Vite plugin that adds a development overlay for inspecting Svelte 5 and SvelteKit apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/chrislentz/svelte-devtools',
    npm: 'https://www.npmjs.com/package/@svelte-devtools/vite-plugin',
    website: 'https://github.com/chrislentz/svelte-devtools#readme',
  },
  source: {
    github: 'chrislentz/svelte-devtools',
    npm: '@svelte-devtools/vite-plugin',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 86,
      weekly: 12,
    },
  },
})
