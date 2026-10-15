import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'twa',
  description: 'Generate a Trusted Web App',
  icon: '',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/tuarrep/nuxt-twa',
    npm: 'https://npmjs.com/package/nuxt-twa',
    website: 'https://nuxt-twa.tuarrep.dev',
  },
  source: {
    github: 'tuarrep/nuxt-twa',
    npm: 'nuxt-twa',
  },
})
