import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zephracss/vite',
  description: 'Vite plugin for ZephraCSS, an elegant atomic css engine for a more civilized age.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zephra',
    'zephracss',
    'atomic-css',
    'css',
    'vite',
    'vite-plugin',
    'tailwind',
    'tailwindcss',
    'windicss',
  ],
  links: {
    github: 'https://github.com/zephracss/zephracss',
    npm: 'https://www.npmjs.com/package/@zephracss/vite',
    website: 'https://github.com/zephracss/zephracss#readme',
  },
  source: {
    github: 'zephracss/zephracss',
    npm: '@zephracss/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
