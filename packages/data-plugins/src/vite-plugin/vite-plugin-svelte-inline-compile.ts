import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-inline-compile',
  description: 'Precompile inline Svelte components via ES6 tagged template strings',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svelte',
    'vitest',
  ],
  links: {
    github: 'https://github.com/DockYard/svelte-inline-compile',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-inline-compile',
    website: 'https://github.com/DockYard/svelte-inline-compile#readme',
  },
  source: {
    github: 'DockYard/svelte-inline-compile',
    npm: 'vite-plugin-svelte-inline-compile',
  },
  stats: {
    stars: 29,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
