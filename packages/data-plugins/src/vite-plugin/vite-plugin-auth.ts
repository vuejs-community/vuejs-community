import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auth',
  description: 'Password-based authentication plugin for Vite. Protects dev servers, preview deployments, and internal tools with a login form, session persistence, and IP allowlisting.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/yracnet/vite-plugin-auth',
    npm: 'https://www.npmjs.com/package/vite-plugin-auth',
    website: 'https://github.com/yracnet/vite-plugin-auth',
  },
  source: {
    github: 'yracnet/vite-plugin-auth',
    npm: 'vite-plugin-auth',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
