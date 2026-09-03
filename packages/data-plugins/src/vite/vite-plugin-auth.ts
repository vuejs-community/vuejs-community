import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auth',
  description: 'Password-based authentication plugin for Vite. Protects dev servers, preview deployments, and internal tools with a login form, session persistence, and IP allowlisting.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'auth',
    'authentication',
    'login',
    'password',
    'basic-auth',
    'access-control',
    'dev-server',
    'security',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yracnet/vite-plugin-auth',
    npm: 'https://www.npmjs.com/package/vite-plugin-auth',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
