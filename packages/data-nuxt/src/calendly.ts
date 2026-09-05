import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'calendly',
  description: 'Calendly is a scheduling tool that allows you to schedule meetings with your customers. This module allows you to easily add Calendly to your Nuxt application.',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/madebyfabian/nuxt-calendly',
    npm: 'https://npmjs.com/package/nuxt-calendly',
    website: 'https://nuxt-calendly.vercel.app/',
  },
  source: {
    github: 'madebyfabian/nuxt-calendly',
    npm: 'nuxt-calendly',
  },
  stats: {
    stars: 37,
    downloads: {
      monthly: 7182,
      weekly: 2004,
    },
  },
})
