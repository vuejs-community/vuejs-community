import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'betterstack',
  description: 'BetterStack integration',
  icon: 'icon:betterstack',
  category: 'nuxt',
  types: [
    'Monitoring & Logging',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nicogenz/nuxt-betterstack',
    npm: 'https://npmjs.com/package/nuxt-betterstack',
    website: 'https://github.com/nicogenz/nuxt-betterstack',
  },
  source: {
    github: 'nicogenz/nuxt-betterstack',
    npm: 'nuxt-betterstack',
  },
})
