import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@astropub/assist',
  description: 'A library of tools to help you develop with Astro',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'asset',
    'astro',
    'astro-plugin',
    'rollup',
    'management',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@astropub/assist',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 6,
    },
  },
})
