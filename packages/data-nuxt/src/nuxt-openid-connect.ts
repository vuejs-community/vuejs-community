import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-openid-connect',
  description: 'OpenID Connect (OIDC) integration.',
  icon: '',
  category: 'nuxt',
  types: [
    'Authentication',
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
})
