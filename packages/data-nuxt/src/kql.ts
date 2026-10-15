import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kql',
  description: 'Kirby\'s Query Language API integration',
  icon: 'icon:kql',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/nuxt-kirby',
    npm: 'https://npmjs.com/package/nuxt-kirby',
    website: 'https://nuxt-kirby.byjohann.dev/',
  },
  source: {
    github: 'johannschopplich/nuxt-kirby',
    npm: 'nuxt-kirby',
  },
})
