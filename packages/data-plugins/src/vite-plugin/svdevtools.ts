import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svdevtools',
  description: 'Svelte 5 DevTools dock for Vite DevTools',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'svelte5',
    'vite',
    'devtools',
    'vite-plugin',
    'inspector',
  ],
  links: {
    github: 'https://github.com/hasinoorit/svdevtools',
    npm: 'https://www.npmjs.com/package/svdevtools',
    website: 'https://github.com/hasinoorit/svdevtools#readme',
  },
  source: {
    github: 'hasinoorit/svdevtools',
    npm: 'svdevtools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 164,
      weekly: 13,
    },
  },
})
