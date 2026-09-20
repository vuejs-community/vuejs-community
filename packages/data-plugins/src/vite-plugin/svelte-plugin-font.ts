import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svelte-plugin/font',
  description: 'Zero-config SvelteKit/Vite font plugin: auto-detect, self-host, and metric-matched fallbacks that eliminate layout shift.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'vite',
    'vite-plugin',
    'fonts',
    'google-fonts',
    'web-fonts',
    'fontaine',
    'unifont',
    'cls',
    'tailwindcss',
  ],
  links: {
    github: 'https://github.com/svelte-plugin/font',
    npm: 'https://www.npmjs.com/package/@svelte-plugin/font',
    website: 'https://github.com/svelte-plugin/font#readme',
  },
  source: {
    github: 'svelte-plugin/font',
    npm: '@svelte-plugin/font',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47,
      weekly: 6,
    },
  },
})
