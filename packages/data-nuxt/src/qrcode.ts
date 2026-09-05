import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'qrcode',
  description: 'A Nuxt module that provides support for generating and reading QRCodes.',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/sandros94/nuxt-qrcode',
    npm: 'https://npmjs.com/package/nuxt-qrcode',
    website: 'https://qrcode.s94.dev',
  },
  source: {
    github: 'sandros94/nuxt-qrcode',
    npm: 'nuxt-qrcode',
  },
  stats: {
    stars: 88,
    downloads: {
      monthly: 27432,
      weekly: 8757,
    },
  },
})
