import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'jsx-svelte',
  description: 'Write Svelte 5 components in TSX for tests. A Vite plugin that extracts JSX components from .tsx files and compiles them with the real Svelte compiler.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'svelte5',
    'jsx',
    'tsx',
    'testing',
    'vite-plugin',
    'vitest',
  ],
  source: {
    github: 'y7ya-com/jsx-svelte',
    npm: 'jsx-svelte',
  },
  links: {
    github: 'https://github.com/y7ya-com/jsx-svelte',
    npm: 'https://www.npmjs.com/package/jsx-svelte',
    website: 'https://github.com/y7ya-com/jsx-svelte#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
