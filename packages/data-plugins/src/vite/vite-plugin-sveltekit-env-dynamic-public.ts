import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sveltekit-env-dynamic-public',
  description: 'Vite plugin to shim SvelteKit $env/dynamic/public for Storybook',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sveltekit',
    'svelte-kit',
    'storybook',
    'env',
    'svelte',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stayradiated/vite-plugin-sveltekit-env-dynamic-public',
    npm: 'https://www.npmjs.com/package/vite-plugin-sveltekit-env-dynamic-public',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
