import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'simple-worker-vite',
  description: 'easy way to use web workers with vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'plugin',
    'utility',
    'worker',
    'webworker',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jason-rietzke/simple-worker-vite',
    npm: 'https://www.npmjs.com/package/simple-worker-vite',
    website: 'https://jason-rietzke.github.io/simple-worker-vite/',
  },
  source: {
    github: 'jason-rietzke/simple-worker-vite',
    npm: 'simple-worker-vite',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 62,
      weekly: 11,
    },
  },
})
