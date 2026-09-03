import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lo-fi/webauthn-local-client',
  description: 'Browser-only utils for locally managing WebAuthn (passkey) API',
  version: '0.4000.0',
  category: 'plugin',
  tags: [
    'auth',
    'passkey',
    'webauthn',
    'biometric',
    'cryptography',
    'vite-plugin',
    'webpack-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mylofi/webauthn-local-client',
    npm: 'https://www.npmjs.com/package/@lo-fi/webauthn-local-client',
  },
  stats: {
    downloads: {
      monthly: 168,
      weekly: 29,
    },
  },
})
