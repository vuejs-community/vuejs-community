import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lo-fi/webauthn-local-client',
  description: 'Browser-only utils for locally managing WebAuthn (passkey) API',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'auth',
    'passkey',
    'webauthn',
    'biometric',
    'cryptography',
    'vite-plugin',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/mylofi/webauthn-local-client',
    npm: 'https://www.npmjs.com/package/@lo-fi/webauthn-local-client',
    website: 'https://github.com/mylofi/webauthn-local-client',
  },
  source: {
    github: 'mylofi/webauthn-local-client',
    npm: '@lo-fi/webauthn-local-client',
  },
  stats: {
    stars: 179,
    downloads: {
      monthly: 118,
      weekly: 23,
    },
  },
})
