import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'csrf-armor',
  description: 'CSRF protection powered by csrf-armor',
  icon: '',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/muneebs/csrf-armor',
    npm: 'https://npmjs.com/package/@csrf-armor/nuxt',
    website: 'https://github.com/muneebs/csrf-armor/tree/main/packages/nuxt#readme',
  },
  source: {
    github: 'muneebs/csrf-armor',
    npm: '@csrf-armor/nuxt',
  },
})
