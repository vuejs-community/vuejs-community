import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-public',
  description: 'Postprocessing for /public',
  icon: 'logos:vite-icon',
  version: '2.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'alloc/vite-plugin-public',
    npm: 'vite-plugin-public',
  },
  links: {
    github: 'https://github.com/alloc/vite-plugin-public',
    npm: 'https://www.npmjs.com/package/vite-plugin-public',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
