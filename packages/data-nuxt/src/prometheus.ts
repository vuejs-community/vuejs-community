import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prometheus',
  description: 'Allows you to better understand what\'s going on with your application and how to optimize performance and other things in production',
  icon: 'icon:prometheus',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/artmizu/nuxt-prometheus',
    npm: 'https://npmjs.com/package/@artmizu/nuxt-prometheus',
    website: 'https://github.com/artmizu/nuxt-prometheus',
  },
  source: {
    github: 'artmizu/nuxt-prometheus',
    npm: '@artmizu/nuxt-prometheus',
  },
  stats: {
    stars: 94,
    downloads: {
      monthly: 42596,
      weekly: 10125,
    },
  },
})
