import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-oidc-auth',
  description: 'OpenID Connect (OIDC) authentication with presets for common providers.',
  icon: '',
  category: 'nuxt',
  types: [
    'Authentication',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/itpropro/nuxt-oidc-auth',
    npm: 'https://npmjs.com/package/nuxt-oidc-auth',
    website: 'https://nuxtoidc.cloud/',
  },
  source: {
    github: 'itpropro/nuxt-oidc-auth',
    npm: 'nuxt-oidc-auth',
  },
})
