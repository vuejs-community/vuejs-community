import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'oidc-mock',
  description: 'OpenID Connect provider for local development: users and claims in one YAML file, a login page to pick them, and a Vite plugin that makes it work behind --host.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'oidc',
    'openid-connect',
    'oauth2',
    'mock',
    'dev-server',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Strehk/oidc-mock',
    npm: 'https://www.npmjs.com/package/oidc-mock',
    website: 'https://github.com/Strehk/oidc-mock#readme',
  },
  source: {
    github: 'Strehk/oidc-mock',
    npm: 'oidc-mock',
  },
})
