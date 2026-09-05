import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-pdf-frame',
  description: 'Nuxt module for template based PDF and Canvas rendering, powered by I2djs.',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/i2djs/pdf-frame',
    npm: 'https://npmjs.com/package/@i2d/nuxt-pdf-frame',
    website: 'https://www.pdf-frame.org',
  },
  source: {
    github: 'i2djs/pdf-frame#main/packages/pdf-frame-nuxt',
    npm: '@i2d/nuxt-pdf-frame',
  },
  stats: {
    stars: 87,
    downloads: {
      monthly: 762,
      weekly: 211,
    },
  },
})
