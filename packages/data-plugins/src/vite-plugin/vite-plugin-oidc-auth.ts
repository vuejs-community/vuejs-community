import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oidc-auth',
  description: 'A Vite plugin for OIDC authentication during development (dev mode only)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'oidc',
    'authentication',
    'oauth',
    'development',
    'dev-only',
  ],
  source: {
    github: 'ThilinaTLM/vite-plugin-oidc-auth',
    npm: 'vite-plugin-oidc-auth',
  },
  links: {
    github: 'https://github.com/ThilinaTLM/vite-plugin-oidc-auth',
    npm: 'https://www.npmjs.com/package/vite-plugin-oidc-auth',
    website: 'https://github.com/ThilinaTLM/vite-plugin-oidc-auth#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 137,
      weekly: 39,
    },
  },
})
