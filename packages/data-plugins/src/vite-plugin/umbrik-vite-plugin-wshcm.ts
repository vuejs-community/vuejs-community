import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@umbrik/vite-plugin-wshcm',
  description: 'Vite плагин для транспиляции TypeScript кода в формат WSHCM',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'wshcm',
    'webtutor',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@umbrik/vite-plugin-wshcm',
  },
  source: {
    npm: '@umbrik/vite-plugin-wshcm',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
