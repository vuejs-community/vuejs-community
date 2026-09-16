import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-b13',
  description: 'Opinionated Vite plugin — PostCSS, SVG loader and image optimizer for b13 projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'postcss',
    'svg',
    'image-optimizer',
    'typo3',
    'b13',
  ],
  source: {
    npm: 'vite-plugin-b13',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-b13',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
