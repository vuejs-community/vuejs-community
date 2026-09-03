import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-inline-compile',
  description: 'Precompile inline Svelte components via ES6 tagged template strings',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'svelte',
    'vitest',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DockYard/svelte-inline-compile',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-inline-compile',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
