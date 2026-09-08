import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mobile',
  description: 'Generate a mobile bundle',
  icon: 'logos:vite-icon',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'alloc/vite-plugin-mobile',
    npm: 'vite-plugin-mobile',
  },
  links: {
    github: 'https://github.com/alloc/vite-plugin-mobile',
    npm: 'https://www.npmjs.com/package/vite-plugin-mobile',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
