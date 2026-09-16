import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-md',
  description: 'Vite plugin to convert markdown to svelte template',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'markdown',
    'markdown-it',
    'markdown-exit',
  ],
  source: {
    github: 'ota-meshi/vite-plugin-svelte-md',
    npm: 'vite-plugin-svelte-md',
  },
  links: {
    github: 'https://github.com/ota-meshi/vite-plugin-svelte-md',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-md',
    website: 'https://github.com/ota-meshi/vite-plugin-svelte-md#readme',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 5179,
      weekly: 1552,
    },
  },
})
