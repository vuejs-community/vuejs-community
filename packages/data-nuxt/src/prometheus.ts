import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prometheus',
  description: 'Prometheus metrics with Node.js default metrics plus page render and API request timings.',
  icon: 'icon:prometheus',
  category: 'nuxt',
  types: [
    'Monitoring & Logging',
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
})
