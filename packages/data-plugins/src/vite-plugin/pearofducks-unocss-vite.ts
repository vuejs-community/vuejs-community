import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pearofducks/unocss-vite',
  description: 'The Vite plugin for UnoCSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unocss',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/unocss/unocss',
    npm: 'https://www.npmjs.com/package/@pearofducks/unocss-vite',
    website: 'https://github.com/unocss/unocss/tree/main/packages/vite#readme',
  },
  source: {
    github: 'unocss/unocss',
    npm: '@pearofducks/unocss-vite',
  },
  stats: {
    stars: 18960,
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
