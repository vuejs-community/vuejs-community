import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-for-svelte-svg',
  description: 'Vite plugin for SVG handling in Svelte projects with dynamic color and size support',
  icon: 'logos:vite-icon',
  version: '0.9.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'svg',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'meiseayoung/vite-plugin-svelte-svg',
    npm: 'vite-plugin-for-svelte-svg',
  },
  links: {
    github: 'https://github.com/meiseayoung/vite-plugin-svelte-svg',
    npm: 'https://www.npmjs.com/package/vite-plugin-for-svelte-svg',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
