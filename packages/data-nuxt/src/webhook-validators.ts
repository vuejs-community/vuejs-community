import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'webhook-validators',
  description: 'Nuxt module that works on the edge to easily validate incoming webhooks from different services.',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/yizack/nuxt-webhook-validators',
    npm: 'https://npmjs.com/package/nuxt-webhook-validators',
    website: 'https://github.com/Yizack/nuxt-webhook-validators',
  },
  source: {
    github: 'yizack/nuxt-webhook-validators',
    npm: 'nuxt-webhook-validators',
  },
  stats: {
    stars: 53,
    downloads: {
      monthly: 1709,
      weekly: 256,
    },
  },
})
