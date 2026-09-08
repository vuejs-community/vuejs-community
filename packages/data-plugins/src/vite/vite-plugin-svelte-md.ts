import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-md',
  description: 'Vite plugin to convert markdown to svelte template',
  icon: 'logos:vite-icon',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'markdown',
    'markdown-it',
    'markdown-exit',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ota-meshi/vite-plugin-svelte-md',
    npm: 'vite-plugin-svelte-md',
  },
  links: {
    github: 'https://github.com/ota-meshi/vite-plugin-svelte-md',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-md',
  },
  stats: {
    downloads: {
      monthly: 5266,
      weekly: 1156,
    },
  },
})
