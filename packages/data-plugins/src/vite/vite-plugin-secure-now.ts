import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-secure-now',
  description: 'A Vite plugin to get instant https for your development server',
  icon: 'logos:vite-icon',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssl',
    'https',
    'secure',
    'development',
    'node',
    'server',
    'traefik',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'psyirius/vite-plugin-secure-now',
    npm: 'vite-plugin-secure-now',
  },
  links: {
    github: 'https://github.com/psyirius/vite-plugin-secure-now',
    npm: 'https://www.npmjs.com/package/vite-plugin-secure-now',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
