import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dir-to-routes',
  description: 'A Vite plugin to convert directory structure to route config JSON',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'routing',
  ],
  source: {
    npm: 'vite-plugin-dir-to-routes',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-dir-to-routes',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
