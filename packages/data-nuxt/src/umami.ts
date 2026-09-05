import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'umami',
  description: 'Embed the Umami analytics library into Nuxt',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/ijkml/nuxt-umami',
    npm: 'https://npmjs.com/package/nuxt-umami',
    website: 'https://github.com/ijkml/nuxt-umami',
  },
  source: {
    github: 'ijkml/nuxt-umami',
    npm: 'nuxt-umami',
  },
  stats: {
    stars: 136,
    downloads: {
      monthly: 14832,
      weekly: 3131,
    },
  },
})
