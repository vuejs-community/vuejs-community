import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rk-web/vite-plugin-validate',
  description: 'Плагин для валидации сайта',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'validate',
    'accessibility',
    'lighthouse',
  ],
  source: {
    npm: '@rk-web/vite-plugin-validate',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@rk-web/vite-plugin-validate',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
