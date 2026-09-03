import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dir-to-routes',
  description: 'A Vite plugin to convert directory structure to route config JSON',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'routing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-dir-to-routes',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
