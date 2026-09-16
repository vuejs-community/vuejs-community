import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@blakearoberts/visage',
  description: 'Vite plugin for local development with HMR and OIDC session cookie lifecycle semantics.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'authentication',
    'hmr',
    'local-development',
    'oauth2',
    'oidc',
    'pkce',
    'session-cookie',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'blakearoberts/visage',
    npm: '@blakearoberts/visage',
  },
  links: {
    github: 'https://github.com/blakearoberts/visage',
    npm: 'https://www.npmjs.com/package/@blakearoberts/visage',
    website: 'https://github.com/blakearoberts/visage#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 803,
      weekly: 54,
    },
  },
})
