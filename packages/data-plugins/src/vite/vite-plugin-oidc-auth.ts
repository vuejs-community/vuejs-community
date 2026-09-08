import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oidc-auth',
  description: 'A Vite plugin for OIDC authentication during development (dev mode only)',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'ThilinaTLM/vite-plugin-oidc-auth',
    npm: 'vite-plugin-oidc-auth',
  },
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
