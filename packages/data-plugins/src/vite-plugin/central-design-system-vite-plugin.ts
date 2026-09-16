import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@central-design-system/vite-plugin',
  description: 'Vite plugin for Luma Design System: SASS variables configuration and components auto-import',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'luma',
    'cds',
    'vite-plugin',
    'design system',
    'vue',
  ],
  source: {
    npm: '@central-design-system/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@central-design-system/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 434,
      weekly: 25,
    },
  },
})
