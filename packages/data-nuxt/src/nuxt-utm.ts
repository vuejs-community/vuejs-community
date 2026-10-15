import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-utm',
  description: 'Capture UTM parameters and ad click IDs to attribute leads to campaigns',
  icon: '',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/stackbuilders/nuxt-utm',
    npm: 'https://npmjs.com/package/nuxt-utm',
    website: 'https://github.com/stackbuilders/nuxt-utm',
  },
  source: {
    github: 'stackbuilders/nuxt-utm',
    npm: 'nuxt-utm',
  },
})
