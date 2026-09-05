import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preprocess-debug-info',
  description: 'Preprocess files and replace __LINE__ __FILE__ in C style',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-preprocess-debug-info',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
