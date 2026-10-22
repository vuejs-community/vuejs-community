import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-flags',
  description: 'Feature flags from toggle services such as Unleash.',
  icon: '',
  category: 'nuxt',
  types: [
    'Deployment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/conejerock/nuxt-flags',
    npm: 'https://npmjs.com/package/nuxt-flags',
    website: 'https://github.com/conejerock/nuxt-flags',
  },
  source: {
    github: 'conejerock/nuxt-flags',
    npm: 'nuxt-flags',
  },
})
