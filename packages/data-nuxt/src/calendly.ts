import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'calendly',
  description: 'Calendly is a scheduling tool that allows you to schedule meetings with your customers. This module allows you to easily add Calendly to your app.',
  icon: 'icon:calendly',
  category: 'nuxt',
  types: [
    'Widgets & Embeds',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/madebyfabian/nuxt-calendly',
    npm: 'https://npmjs.com/package/nuxt-calendly',
    website: 'https://nuxt-calendly.vercel.app/',
  },
  source: {
    github: 'madebyfabian/nuxt-calendly',
    npm: 'nuxt-calendly',
  },
})
