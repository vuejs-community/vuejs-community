import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@thomasfosterau/effect-sveltekit',
  description: 'Effect integration for SvelteKit: load/action/endpoint wrappers, remote functions, an effectKit() Vite plugin, and an Effect HTTP deployment adapter',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'effect',
    'functional-programming',
    'svelte',
    'sveltekit',
    'typescript',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/thomasfosterau/effect-svelte',
    npm: 'https://www.npmjs.com/package/@thomasfosterau/effect-sveltekit',
  },
  stats: {
    downloads: {
      monthly: 681,
      weekly: 81,
    },
  },
})
