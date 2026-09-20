import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-interceptor',
  description: 'A vite plugin based on service worker to intercept and modify requests in a development environment',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mock',
    'mock-server',
    'easy-interceptor',
  ],
  links: {
    github: 'https://github.com/hans000/vite-plugin-interceptor',
    npm: 'https://www.npmjs.com/package/vite-plugin-interceptor',
    website: 'https://github.com/hans000/vite-plugin-interceptor#readme',
  },
  source: {
    github: 'hans000/vite-plugin-interceptor',
    npm: 'vite-plugin-interceptor',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
