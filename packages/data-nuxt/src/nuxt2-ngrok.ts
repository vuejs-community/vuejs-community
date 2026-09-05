import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt2-ngrok',
  description: 'ngrok exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/ngrok',
    npm: 'https://npmjs.com/package/@nuxtjs/ngrok',
    website: 'https://ngrok.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/ngrok',
    npm: '@nuxtjs/ngrok',
  },
  stats: {
    stars: 72,
    downloads: {
      monthly: 10962,
      weekly: 2522,
    },
  },
})
