import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rsvelte/vite-plugin-svelte-native',
  description: 'NAPI bindings to the rsvelte compiler — used by the @rsvelte vite-plugin-svelte shim',
  version: '0.3.10',
  category: 'plugin',
  tags: [
    'svelte',
    'vite',
    'vite-plugin',
    'rust',
    'napi',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/baseballyama/rsvelte',
    npm: 'https://www.npmjs.com/package/@rsvelte/vite-plugin-svelte-native',
  },
  stats: {
    downloads: {
      monthly: 3299,
      weekly: 1031,
    },
  },
})
