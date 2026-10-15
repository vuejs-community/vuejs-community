import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bugsnag',
  description: 'Bugsnag integration with optional source map uploads and performance monitoring.',
  icon: '',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/JulianMar/nuxt-bugsnag',
    npm: 'https://npmjs.com/package/nuxt-bugsnag',
    website: 'https://github.com/JulianMar/nuxt-bugsnag',
  },
  source: {
    github: 'JulianMar/nuxt-bugsnag',
    npm: 'nuxt-bugsnag',
  },
})
