import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-pdf-frame',
  description: 'Template-based PDF and Canvas rendering, powered by I2djs.',
  icon: 'icon:pdf-frame',
  category: 'nuxt',
  types: [
    'Utilities',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/i2djs/pdf-frame',
    npm: 'https://npmjs.com/package/@i2d/nuxt-pdf-frame',
    website: 'https://github.com/I2Djs/pdf-frame/tree/main/packages/pdf-frame-nuxt',
  },
  source: {
    github: 'i2djs/pdf-frame',
    npm: '@i2d/nuxt-pdf-frame',
  },
})
