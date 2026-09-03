import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-har-mock',
  description: 'A Vite plugin for mocking API requests using chrome HAR files',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'har',
    'mock',
    'api',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-har-mock',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
