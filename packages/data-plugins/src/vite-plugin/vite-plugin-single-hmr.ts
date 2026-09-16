import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-single-hmr',
  description: 'A vite plugin for hot module error for Cannot access xxx before initialization.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
  ],
  source: {
    npm: 'vite-plugin-single-hmr',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-single-hmr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
