import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preprocess-debug-info',
  description: 'Preprocess files and replace __LINE__ __FILE__ in C style',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-preprocess-debug-info',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-preprocess-debug-info',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
