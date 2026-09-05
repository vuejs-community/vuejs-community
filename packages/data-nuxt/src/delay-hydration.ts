import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'delay-hydration',
  description: 'Improve your Nuxt v2 Google Lighthouse score by delaying hydration.',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/harlan-zw/nuxt-delay-hydration',
    npm: 'https://npmjs.com/package/nuxt-delay-hydration',
    website: 'https://github.com/harlan-zw/nuxt-delay-hydration',
  },
  source: {
    github: 'harlan-zw/nuxt-delay-hydration',
    npm: 'nuxt-delay-hydration',
  },
  stats: {
    stars: 400,
    downloads: {
      monthly: 50064,
      weekly: 14071,
    },
  },
})
