import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'neo',
  description: 'Implements a universal API layer, same-way compatible between server and client side.',
  icon: '',
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
})
