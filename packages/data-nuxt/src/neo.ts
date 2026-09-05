import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'neo',
  description: 'A nuxt.js module that implements a universal api layer, same-way compatible between server and client side.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/ezypeeze/nuxt-neo',
    npm: 'https://npmjs.com/package/nuxt-neo',
    website: 'https://ezypeeze.github.io/nuxt-neo',
  },
  source: {
    github: 'ezypeeze/nuxt-neo',
    npm: 'nuxt-neo',
  },
  stats: {
    stars: 57,
    downloads: {
      monthly: 340,
      weekly: 31,
    },
  },
})
