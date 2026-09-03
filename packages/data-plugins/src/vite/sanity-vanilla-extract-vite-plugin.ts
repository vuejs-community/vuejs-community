import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sanity/vanilla-extract-vite-plugin',
  description: 'Vite 8 plugin for vanilla-extract with plugin hook filters and a caching compiler on Vite\'s ModuleRunner',
  version: '0.2.17',
  category: 'plugin',
  tags: [
    'sanity-io',
    'sanity',
    'vanilla-extract',
    'vite',
    'vite-plugin',
    'rolldown',
    'css',
    'plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sanity-io/pkg-utils',
    npm: 'https://www.npmjs.com/package/@sanity/vanilla-extract-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 24999,
      weekly: 5765,
    },
  },
})
