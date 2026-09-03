import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rk-web/vite-plugin-critical',
  description: 'Плагин для извлечения критического CSS',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'critical-css',
    'performance',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@rk-web/vite-plugin-critical',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
