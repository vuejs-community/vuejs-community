import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mobile',
  description: 'Generate a mobile bundle',
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
    github: 'alloc/vite-plugin-mobile',
    npm: 'vite-plugin-mobile',
  },
  links: {
    github: 'https://github.com/alloc/vite-plugin-mobile',
    npm: 'https://www.npmjs.com/package/vite-plugin-mobile',
    website: 'https://github.com/alloc/vite-plugin-mobile#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 20,
      weekly: 7,
    },
  },
})
