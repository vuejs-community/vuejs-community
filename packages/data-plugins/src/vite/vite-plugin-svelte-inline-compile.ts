import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-inline-compile',
  description: 'Precompile inline Svelte components via ES6 tagged template strings',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'DockYard/svelte-inline-compile',
    npm: 'vite-plugin-svelte-inline-compile',
  },
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
