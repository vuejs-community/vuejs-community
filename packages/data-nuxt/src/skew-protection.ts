import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'skew-protection',
  description: 'Solve Nuxt version skews with persistent assets and instant updates.',
  icon: 'icon:skew-protection',
  category: 'nuxt',
  types: [
    'Deployment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/harlan-zw/nuxt-skew-protection',
    npm: 'https://npmjs.com/package/nuxt-skew-protection',
    website: 'https://nuxtseo.com/docs/skew-protection/getting-started/introduction',
  },
  source: {
    github: 'harlan-zw/nuxt-skew-protection',
    npm: 'nuxt-skew-protection',
  },
})
