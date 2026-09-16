import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-svgr',
  description: 'Vite plugin to enable normalized SVG imports.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svg',
    'vite-plugin',
    'vite-plugin-svgr',
    'svelte',
    'sveltekit',
    'svgo',
  ],
  source: {
    github: 'blujedis/vite-plugin-svelte-svgr',
    npm: 'vite-plugin-svelte-svgr',
  },
  links: {
    github: 'https://github.com/blujedis/vite-plugin-svelte-svgr',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-svgr',
    website: 'https://github.com/blujedis/vite-plugin-svelte-svgr#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 1676,
      weekly: 279,
    },
  },
})
