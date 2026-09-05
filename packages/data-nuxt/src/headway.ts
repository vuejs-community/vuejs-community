import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'headway',
  description: 'Headway changelog widget for Nuxt',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/l-portet/nuxt-headway',
    npm: 'https://npmjs.com/package/nuxt-headway',
    website: 'https://nuxt-headway.netlify.app/',
  },
  source: {
    github: 'l-portet/nuxt-headway',
    npm: 'nuxt-headway',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 65,
      weekly: 15,
    },
  },
})
