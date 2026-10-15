import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'well-known',
  description: 'Serve .well-known URIs (security.txt, change-password and custom content) from your server.',
  icon: 'icon:well-known',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/zadigetvoltaire/nuxt-well-known',
    npm: 'https://npmjs.com/package/@zadigetvoltaire/nuxt-well-known',
    website: 'https://github.com/zadigetvoltaire/nuxt-well-known#readme',
  },
  source: {
    github: 'zadigetvoltaire/nuxt-well-known',
    npm: '@zadigetvoltaire/nuxt-well-known',
  },
})
