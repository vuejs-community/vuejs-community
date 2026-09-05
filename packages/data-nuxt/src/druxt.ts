import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'druxt',
  description: 'A bridge between frameworks, Drupal in the back, Nuxt in the front.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/druxt/druxt.js',
    npm: 'https://npmjs.com/package/druxt',
    website: 'https://druxtjs.org',
  },
  source: {
    github: 'druxt/druxt.js#develop/packages/druxt',
    npm: 'druxt',
  },
  stats: {
    stars: 114,
    downloads: {
      monthly: 10030,
      weekly: 1011,
    },
  },
})
