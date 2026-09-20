import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@utk09/vite-dev-auth-plugin',
  description: 'Silent SSO & cookie proxy for local Vite development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'sso',
    'auth',
    'dev',
  ],
  links: {
    github: 'https://github.com/utk09/vite-dev-auth-plugin',
    npm: 'https://www.npmjs.com/package/@utk09/vite-dev-auth-plugin',
    website: 'https://github.com/utk09/vite-dev-auth-plugin#readme',
  },
  source: {
    github: 'utk09/vite-dev-auth-plugin',
    npm: '@utk09/vite-dev-auth-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 896,
      weekly: 147,
    },
  },
})
