import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'github-api',
  description: 'GitHub v4 API integration',
  icon: 'icon:github',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/lindsaykwardell/nuxt-github-api',
    npm: 'https://npmjs.com/package/nuxt-github-api',
    website: 'https://github.com/lindsaykwardell/nuxt-github-api',
  },
  source: {
    github: 'lindsaykwardell/nuxt-github-api',
    npm: 'nuxt-github-api',
  },
})
