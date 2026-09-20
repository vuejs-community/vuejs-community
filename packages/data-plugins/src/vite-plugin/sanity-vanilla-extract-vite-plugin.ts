import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sanity/vanilla-extract-vite-plugin',
  description: 'Vite 8 plugin for vanilla-extract with plugin hook filters and a caching compiler on Vite\'s ModuleRunner',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/sanity-io/pkg-utils',
    npm: 'https://www.npmjs.com/package/@sanity/vanilla-extract-vite-plugin',
    website: 'https://github.com/sanity-io/pkg-utils/tree/main/packages/@sanity/vanilla-extract-vite-plugin#readme',
  },
  source: {
    github: 'sanity-io/pkg-utils',
    npm: '@sanity/vanilla-extract-vite-plugin',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 14480,
      weekly: 1306,
    },
  },
})
