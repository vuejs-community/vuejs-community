import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@blakearoberts/visage',
  description: 'Vite plugin for local development with HMR and OIDC session cookie lifecycle semantics.',
  version: '0.0.4',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/blakearoberts/visage',
    npm: 'https://www.npmjs.com/package/@blakearoberts/visage',
  },
  stats: {
    downloads: {
      monthly: 1637,
      weekly: 389,
    },
  },
})
