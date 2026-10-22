import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'logto',
  description: 'Logto authentication integration',
  icon: 'icon:logto',
  category: 'nuxt',
  types: [
    'Authentication',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/logto-io/js',
    npm: 'https://npmjs.com/package/@logto/nuxt',
    website: 'https://logto.io',
  },
  source: {
    github: 'logto-io/js',
    npm: '@logto/nuxt',
  },
})
