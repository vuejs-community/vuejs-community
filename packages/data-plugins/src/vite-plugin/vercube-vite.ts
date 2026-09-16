import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vercube/vite',
  description: 'Vite plugin integrating Vercube with the Vite Environment API',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vercube',
    'vite',
    'vite-plugin',
    'environment-api',
    'framework',
  ],
  source: {
    github: 'vercube/vercube',
    npm: '@vercube/vite',
  },
  links: {
    github: 'https://github.com/vercube/vercube',
    npm: 'https://www.npmjs.com/package/@vercube/vite',
  },
  stats: {
    stars: 112,
    downloads: {
      monthly: 443,
      weekly: 59,
    },
  },
})
