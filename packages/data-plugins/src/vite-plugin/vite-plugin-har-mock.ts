import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-har-mock',
  description: 'A Vite plugin for mocking API requests using chrome HAR files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'har',
    'mock',
    'api',
  ],
  source: {
    npm: 'vite-plugin-har-mock',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-har-mock',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
