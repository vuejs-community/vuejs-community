import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gautemo/vite-plugin-service-worker',
  description: 'Simple way to register service worker in a Vite project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'gautemo/vite-plugin-service-worker',
    npm: '@gautemo/vite-plugin-service-worker',
  },
  links: {
    github: 'https://github.com/gautemo/vite-plugin-service-worker',
    npm: 'https://www.npmjs.com/package/@gautemo/vite-plugin-service-worker',
    website: 'https://github.com/gautemo/vite-plugin-service-worker#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 733,
      weekly: 57,
    },
  },
})
