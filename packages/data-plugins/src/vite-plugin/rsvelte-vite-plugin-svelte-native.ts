import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rsvelte/vite-plugin-svelte-native',
  description: 'NAPI bindings to the rsvelte compiler — used by the @rsvelte vite-plugin-svelte shim',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'vite',
    'vite-plugin',
    'rust',
    'napi',
  ],
  source: {
    github: 'baseballyama/rsvelte',
    npm: '@rsvelte/vite-plugin-svelte-native',
  },
  links: {
    github: 'https://github.com/baseballyama/rsvelte',
    npm: 'https://www.npmjs.com/package/@rsvelte/vite-plugin-svelte-native',
    website: 'https://github.com/baseballyama/rsvelte/tree/main/apps/npm/vite-plugin-svelte-native#readme',
  },
  stats: {
    stars: 218,
    downloads: {
      monthly: 3278,
      weekly: 694,
    },
  },
})
