import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'custom-elements',
  description: 'Publish your Components as a vue-custom-element standalone build.',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/GrabarzUndPartner/nuxt-custom-elements',
    npm: 'https://npmjs.com/package/nuxt-custom-elements',
    website: 'https://grabarzundpartner.github.io/nuxt-custom-elements/',
  },
  source: {
    github: 'GrabarzUndPartner/nuxt-custom-elements',
    npm: 'nuxt-custom-elements',
  },
  stats: {
    stars: 83,
    downloads: {
      monthly: 3408,
      weekly: 850,
    },
  },
})
