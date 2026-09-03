import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oidc-auth',
  description: 'A Vite plugin for OIDC authentication during development (dev mode only)',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'oidc',
    'authentication',
    'oauth',
    'development',
    'dev-only',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ThilinaTLM/vite-plugin-oidc-auth',
    npm: 'https://www.npmjs.com/package/vite-plugin-oidc-auth',
  },
  stats: {
    downloads: {
      monthly: 313,
      weekly: 25,
    },
  },
})
