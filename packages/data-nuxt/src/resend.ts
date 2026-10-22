import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'resend',
  description: 'Resend integration',
  icon: 'icon:resend',
  category: 'nuxt',
  types: [
    'Email & Notifications',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nhedger/nuxt-resend',
    npm: 'https://npmjs.com/package/nuxt-resend',
    website: 'https://github.com/nhedger/nuxt-resend',
  },
  source: {
    github: 'nhedger/nuxt-resend',
    npm: 'nuxt-resend',
  },
})
