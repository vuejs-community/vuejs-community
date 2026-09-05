import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-mqtt',
  description: 'A Nuxt module for real-time MQTT communication using mqtt.js',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nuxtaid/nuxt-mqtt',
    npm: 'https://npmjs.com/package/nuxt-mqtt',
    website: 'https://github.com/nuxtaid/nuxt-mqtt#readme',
  },
  source: {
    github: 'nuxtaid/nuxt-mqtt',
    npm: 'nuxt-mqtt',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 107,
      weekly: 17,
    },
  },
})
