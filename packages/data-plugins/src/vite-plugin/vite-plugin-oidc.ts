import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oidc',
  description: 'A Vite plugin that provides OIDC server functionality for local development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'oidc',
    'oauth2',
    'development',
  ],
  links: {
    github: 'https://github.com/kouki-miura2/vite-plugin-oidc',
    npm: 'https://www.npmjs.com/package/vite-plugin-oidc',
    website: 'https://github.com/kouki-miura2/vite-plugin-oidc#readme',
  },
  source: {
    github: 'kouki-miura2/vite-plugin-oidc',
    npm: 'vite-plugin-oidc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 72,
      weekly: 3,
    },
  },
})
