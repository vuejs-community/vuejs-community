import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svelte-anywhere',
  description: 'Use Svelte components anywhere',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'svelte',
    'vite-plugin',
    'custom-elements',
    'shadow-dom',
    'web-components',
  ],
  source: {
    github: 'vidschofelix/vite-plugin-svelte-anywhere',
    npm: 'vite-plugin-svelte-anywhere',
  },
  links: {
    github: 'https://github.com/vidschofelix/vite-plugin-svelte-anywhere',
    npm: 'https://www.npmjs.com/package/vite-plugin-svelte-anywhere',
    website: 'https://svelte-anywhere.dev',
  },
  stats: {
    stars: 26,
    downloads: {
      monthly: 34,
      weekly: 4,
    },
  },
})
