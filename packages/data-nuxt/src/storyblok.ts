import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'storyblok',
  description: 'Storyblok Nuxt module',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/storyblok/monoblok',
    npm: 'https://npmjs.com/package/@storyblok/nuxt',
    website: 'https://github.com/storyblok/monoblok/tree/main/packages/nuxt',
  },
  source: {
    github: 'storyblok/monoblok#main/packages/nuxt',
    npm: '@storyblok/nuxt',
  },
  stats: {
    stars: 63,
    downloads: {
      monthly: 81842,
      weekly: 20947,
    },
  },
})
