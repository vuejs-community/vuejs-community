import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'precompress',
  description: 'Precompress files to gzip and brotli and serve them automatically',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/frenchrabbit/nuxt-precompress',
    npm: 'https://npmjs.com/package/nuxt-precompress',
    website: 'https://github.com/frenchrabbit/nuxt-precompress',
  },
  source: {
    github: 'frenchrabbit/nuxt-precompress',
    npm: 'nuxt-precompress',
  },
  stats: {
    stars: 118,
    downloads: {
      monthly: 3965,
      weekly: 978,
    },
  },
})
