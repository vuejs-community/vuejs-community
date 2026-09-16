import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@erbelion/vite-plugin-sveltekit-purgecss',
  description: 'A Vite plugin that integrates PurgeCSS with SvelteKit css assets.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
    'svelte',
    'sveltekit',
  ],
  source: {
    github: 'erbelion/vite-plugin-sveltekit-purgecss',
    npm: '@erbelion/vite-plugin-sveltekit-purgecss',
  },
  links: {
    github: 'https://github.com/erbelion/vite-plugin-sveltekit-purgecss',
    npm: 'https://www.npmjs.com/package/@erbelion/vite-plugin-sveltekit-purgecss',
    website: 'https://github.com/erbelion/vite-plugin-sveltekit-purgecss#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 142,
      weekly: 19,
    },
  },
})
