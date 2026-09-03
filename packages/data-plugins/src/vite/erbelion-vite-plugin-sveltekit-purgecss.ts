import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@erbelion/vite-plugin-sveltekit-purgecss',
  description: 'A Vite plugin that integrates PurgeCSS with SvelteKit css assets.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
    'svelte',
    'sveltekit',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/erbelion/vite-plugin-sveltekit-purgecss',
    npm: 'https://www.npmjs.com/package/@erbelion/vite-plugin-sveltekit-purgecss',
  },
  stats: {
    downloads: {
      monthly: 152,
      weekly: 44,
    },
  },
})
