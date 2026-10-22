import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'qrcode',
  description: 'Support for generating and reading QR codes.',
  icon: 'icon:qrcode',
  category: 'nuxt',
  types: [
    'Utilities',
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
})
