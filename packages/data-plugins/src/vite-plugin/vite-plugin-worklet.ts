import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-worklet',
  description: 'A vite plugin to load worklet inline',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'worklet',
    'typescript',
  ],
  source: {
    npm: 'vite-plugin-worklet',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-worklet',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 5,
    },
  },
})
