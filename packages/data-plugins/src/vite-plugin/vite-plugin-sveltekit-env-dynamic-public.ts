import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sveltekit-env-dynamic-public',
  description: 'Vite plugin to shim SvelteKit $env/dynamic/public for Storybook',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sveltekit',
    'svelte-kit',
    'storybook',
    'env',
    'svelte',
  ],
  source: {
    github: 'stayradiated/vite-plugin-sveltekit-env-dynamic-public',
    npm: 'vite-plugin-sveltekit-env-dynamic-public',
  },
  links: {
    github: 'https://github.com/stayradiated/vite-plugin-sveltekit-env-dynamic-public',
    npm: 'https://www.npmjs.com/package/vite-plugin-sveltekit-env-dynamic-public',
    website: 'https://github.com/stayradiated/vite-plugin-sveltekit-env-dynamic-public#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
