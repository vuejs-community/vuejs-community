import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'astro-client-pragma',
  description: 'Astro integration that auto-adds the proper client:* directive to every template by reading a "client:*"; pragma at the top of each framework component.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'mohamedradime/astro-client-pragma',
    npm: 'astro-client-pragma',
  },
  links: {
    github: 'https://github.com/mohamedradime/astro-client-pragma',
    npm: 'https://www.npmjs.com/package/astro-client-pragma',
    website: 'https://github.com/mohamedradime/astro-client-pragma#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
