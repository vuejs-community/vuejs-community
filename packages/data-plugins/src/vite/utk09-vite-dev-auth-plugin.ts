import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@utk09/vite-dev-auth-plugin',
  description: 'Silent SSO & cookie proxy for local Vite development',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'sso',
    'auth',
    'dev',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/utk09/vite-dev-auth-plugin',
    npm: 'https://www.npmjs.com/package/@utk09/vite-dev-auth-plugin',
  },
  stats: {
    downloads: {
      monthly: 1063,
      weekly: 173,
    },
  },
})
