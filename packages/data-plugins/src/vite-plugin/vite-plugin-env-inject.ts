import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-inject',
  description: 'Vite plugin for runtime environment variable injection in browser builds and Docker deployments',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'environment-variables',
    'node',
    'rolldown',
  ],
  source: {
    github: 'timi137137/vite-plugin-env-inject',
    npm: 'vite-plugin-env-inject',
  },
  links: {
    github: 'https://github.com/timi137137/vite-plugin-env-inject',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-inject',
    website: 'https://github.com/timi137137/vite-plugin-env-inject#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 15,
    },
  },
})
