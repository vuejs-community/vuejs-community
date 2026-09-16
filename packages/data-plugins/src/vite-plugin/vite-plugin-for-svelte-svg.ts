import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-for-svelte-svg',
  description: 'Vite plugin for SVG handling in Svelte projects with dynamic color and size support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'svg',
  ],
  source: {
    github: 'meiseayoung/vite-plugin-svelte-svg',
    npm: 'vite-plugin-for-svelte-svg',
  },
  links: {
    github: 'https://github.com/meiseayoung/vite-plugin-svelte-svg',
    npm: 'https://www.npmjs.com/package/vite-plugin-for-svelte-svg',
    website: 'https://github.com/meiseayoung/vite-plugin-svelte-svg#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
