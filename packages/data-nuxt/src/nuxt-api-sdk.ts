import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-api-sdk',
  description: 'Generates a typed, chainable useApi() client from your Nitro server routes.',
  icon: 'icon:api-sdk',
  category: 'nuxt',
  types: [
    'API & Data Fetching',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/jamiecurnow/nuxt-api-sdk',
    npm: 'https://npmjs.com/package/nuxt-api-sdk',
    website: 'https://github.com/jamiecurnow/nuxt-api-sdk',
  },
  source: {
    github: 'jamiecurnow/nuxt-api-sdk',
    npm: 'nuxt-api-sdk',
  },
})
