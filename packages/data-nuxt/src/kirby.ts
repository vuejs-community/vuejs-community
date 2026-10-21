import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kirby',
  description: 'Fetch Kirby CMS data via KQL or the REST API',
  icon: 'icon:kirby',
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
