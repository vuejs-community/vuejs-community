import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-interceptor',
  description: 'A vite plugin based on service worker to intercept and modify requests in a development environment',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mock',
    'mock-server',
    'easy-interceptor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hans000/vite-plugin-interceptor',
    npm: 'https://www.npmjs.com/package/vite-plugin-interceptor',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
