import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'swiftsearch',
  description: 'A type-safe, SSR-first Algolia InstantSearch experience',
  icon: 'icon:nuxt-swiftsearch',
  category: 'nuxt',
  types: [
    'Utilities',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/atoms-studio/nuxt-swiftsearch',
    npm: 'https://npmjs.com/package/@atoms-studio/nuxt-swiftsearch',
    website: 'https://nuxt-swiftsearch.netlify.app/',
  },
  source: {
    github: 'atoms-studio/nuxt-swiftsearch',
    npm: '@atoms-studio/nuxt-swiftsearch',
  },
})
