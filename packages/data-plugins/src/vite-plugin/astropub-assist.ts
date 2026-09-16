import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@astropub/assist',
  description: 'A library of tools to help you develop with Astro',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'asset',
    'astro',
    'astro-plugin',
    'rollup',
    'management',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: '@astropub/assist',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@astropub/assist',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
