import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mocksmith/vite',
  description: 'Vite plugins for mocksmith: start the mock server with the dev server, reload the browser on demand, hand out collision-free ports.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mocksmith',
    'vite',
    'vite-plugin',
    'mock',
    'testing',
  ],
  links: {
    github: 'https://github.com/georg3103/mocksmith',
    npm: 'https://www.npmjs.com/package/@mocksmith/vite',
    website: 'https://github.com/georg3103/mocksmith#readme',
  },
  source: {
    github: 'georg3103/mocksmith',
    npm: '@mocksmith/vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 514,
      weekly: 514,
    },
  },
})
