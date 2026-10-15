import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'polar',
  description: 'Polar.sh integration',
  icon: 'icon:polar',
  category: 'nuxt',
  types: [
    'Payment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/polarsource/polar',
    npm: 'https://npmjs.com/package/@polar-sh/nuxt',
    website: 'https://polar.sh/docs/integrate/sdk/adapters/nuxt',
  },
  source: {
    github: 'polarsource/polar',
    npm: '@polar-sh/nuxt',
  },
})
