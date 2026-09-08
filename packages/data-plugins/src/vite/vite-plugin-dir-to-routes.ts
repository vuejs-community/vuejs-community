import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dir-to-routes',
  description: 'A Vite plugin to convert directory structure to route config JSON',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-dir-to-routes',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-dir-to-routes',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 11,
    },
  },
})
