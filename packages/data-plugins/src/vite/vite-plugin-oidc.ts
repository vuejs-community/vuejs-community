import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oidc',
  description: 'A Vite plugin that provides OIDC server functionality for local development',
  icon: 'logos:vite-icon',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'oidc',
    'oauth2',
    'development',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kouki-miura2/vite-plugin-oidc',
    npm: 'vite-plugin-oidc',
  },
  links: {
    github: 'https://github.com/kouki-miura2/vite-plugin-oidc',
    npm: 'https://www.npmjs.com/package/vite-plugin-oidc',
  },
  stats: {
    downloads: {
      monthly: 79,
      weekly: 10,
    },
  },
})
