import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'astro-client-pragma',
  description: 'Astro integration that auto-adds the proper client:* directive to every template by reading a "client:*"; pragma at the top of each framework component.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'astro',
    'astro-integration',
    'client-directive',
    'client:load',
    'client:visible',
    'hydration',
    'islands',
    'pragma',
    'auto-hydration',
    'vite-plugin',
    'react',
    'preact',
    'solidjs',
    'svelte',
    'vue',
    'jsx',
    'tsx',
    'web-components',
    'static-site',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mohamedradime/astro-client-pragma',
    npm: 'https://www.npmjs.com/package/astro-client-pragma',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
