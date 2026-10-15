import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'segment',
  description: 'Segment Analytics.js integration.',
  icon: '',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/dansmaculotte/nuxt-segment',
    npm: 'https://npmjs.com/package/@dansmaculotte/nuxt-segment',
    website: 'https://github.com/dansmaculotte/nuxt-segment',
  },
  source: {
    github: 'dansmaculotte/nuxt-segment',
    npm: '@dansmaculotte/nuxt-segment',
  },
})
