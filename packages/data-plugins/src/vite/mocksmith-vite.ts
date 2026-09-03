import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mocksmith/vite',
  description: 'Vite plugins for mocksmith: start the mock server with the dev server, reload the browser on demand, hand out collision-free ports.',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'mocksmith',
    'vite',
    'vite-plugin',
    'mock',
    'testing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/georg3103/mocksmith',
    npm: 'https://www.npmjs.com/package/@mocksmith/vite',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
