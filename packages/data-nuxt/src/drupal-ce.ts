import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'drupal-ce',
  description: 'Connects Nuxt with Drupal via the Lupus Custom Elements Renderer',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/drunomics/nuxtjs-drupal-ce',
    npm: 'https://npmjs.com/package/nuxtjs-drupal-ce',
    website: 'https://lupus-decoupled.org',
  },
  source: {
    github: 'drunomics/nuxtjs-drupal-ce',
    npm: 'nuxtjs-drupal-ce',
  },
  stats: {
    stars: 29,
    downloads: {
      monthly: 4198,
      weekly: 594,
    },
  },
})
