import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-svelterial',
  description: 'A plugin for integration with Vite and SvelteKit.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svelte',
    'svelterial',
  ],
  links: {
    github: 'https://github.com/svelterialjs/integrations',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-svelterial',
    website: 'https://github.com/svelterialjs/integrations/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'svelterialjs/integrations',
    npm: 'vite-plugin-svelte-svelterial',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
