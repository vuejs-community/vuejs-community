import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rk-web/vite-plugin-image-optimizer',
  description: 'Плагин для оптимизации изображений',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'image',
    'optimizer',
    'webp',
    'avif',
  ],
  source: {
    npm: '@rk-web/vite-plugin-image-optimizer',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@rk-web/vite-plugin-image-optimizer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
