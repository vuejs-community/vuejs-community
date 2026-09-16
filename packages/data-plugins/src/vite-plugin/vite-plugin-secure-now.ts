import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-secure-now',
  description: 'A Vite plugin to get instant https for your development server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'psyirius/vite-plugin-secure-now',
    npm: 'vite-plugin-secure-now',
  },
  links: {
    github: 'https://github.com/psyirius/vite-plugin-secure-now',
    npm: 'https://www.npmjs.com/package/vite-plugin-secure-now',
    website: 'https://github.com/psyirius/vite-plugin-secure-now#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
