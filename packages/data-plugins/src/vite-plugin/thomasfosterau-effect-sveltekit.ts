import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@thomasfosterau/effect-sveltekit',
  description: 'Effect integration for SvelteKit: load/action/endpoint wrappers, remote functions, an effectKit() Vite plugin, and an Effect HTTP deployment adapter',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'effect',
    'functional-programming',
    'svelte',
    'sveltekit',
    'typescript',
    'vite-plugin',
  ],
  source: {
    github: 'thomasfosterau/effect-svelte',
    npm: '@thomasfosterau/effect-sveltekit',
  },
  links: {
    github: 'https://github.com/thomasfosterau/effect-svelte',
    npm: 'https://www.npmjs.com/package/@thomasfosterau/effect-sveltekit',
    website: 'https://github.com/thomasfosterau/effect-svelte/tree/main/packages/sveltekit#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 332,
      weekly: 90,
    },
  },
})
