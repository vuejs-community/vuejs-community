import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@supercharge/vite',
  description: 'Vite plugin and package for the Supercharge Node.js framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vitejs',
    'vite-plugin',
    'nodejs',
    'frontend',
    'supercharge',
    'superchargejs',
  ],
  source: {
    github: 'supercharge/framework',
    npm: '@supercharge/vite',
  },
  links: {
    github: 'https://github.com/supercharge/framework',
    npm: 'https://www.npmjs.com/package/@supercharge/vite',
    website: 'https://superchargejs.com',
  },
  stats: {
    stars: 25,
    downloads: {
      monthly: 114,
      weekly: 2,
    },
  },
})
