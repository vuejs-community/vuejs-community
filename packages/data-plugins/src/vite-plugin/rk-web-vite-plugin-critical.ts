import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rk-web/vite-plugin-critical',
  description: 'Плагин для извлечения критического CSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'critical-css',
    'performance',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@rk-web/vite-plugin-critical',
  },
  source: {
    npm: '@rk-web/vite-plugin-critical',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
