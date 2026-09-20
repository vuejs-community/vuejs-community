import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-public',
  description: 'Postprocessing for /public',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alloc/vite-plugin-public',
    npm: 'https://www.npmjs.com/package/vite-plugin-public',
    website: 'https://github.com/alloc/vite-plugin-public#readme',
  },
  source: {
    github: 'alloc/vite-plugin-public',
    npm: 'vite-plugin-public',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
