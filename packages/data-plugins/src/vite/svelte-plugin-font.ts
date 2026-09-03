import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@svelte-plugin/font',
  description: 'Zero-config SvelteKit/Vite font plugin: auto-detect, self-host, and metric-matched fallbacks that eliminate layout shift.',
  version: '0.0.6',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/svelte-plugin/font',
    npm: 'https://www.npmjs.com/package/@svelte-plugin/font',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 14,
    },
  },
})
