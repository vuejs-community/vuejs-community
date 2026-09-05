import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-openid-connect',
  description: 'OpenID-Connect(OIDC) integration module for nuxt 3.0.',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/aborn/nuxt-openid-connect',
    npm: 'https://npmjs.com/package/nuxt-openid-connect',
    website: 'https://github.com/aborn/nuxt-openid-connect',
  },
  source: {
    github: 'aborn/nuxt-openid-connect',
    npm: 'nuxt-openid-connect',
  },
  stats: {
    stars: 42,
    downloads: {
      monthly: 537,
      weekly: 133,
    },
  },
})
