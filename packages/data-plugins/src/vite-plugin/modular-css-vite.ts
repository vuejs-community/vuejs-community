import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@modular-css/vite',
  description: 'vite support for modular-css',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'css-modules',
    'modular-css',
    'postcss',
  ],
  links: {
    github: 'https://github.com/tivac/modular-css',
    npm: 'https://www.npmjs.com/package/@modular-css/vite',
    website: 'https://m-css.com',
  },
  source: {
    github: 'tivac/modular-css',
    npm: '@modular-css/vite',
  },
  stats: {
    stars: 291,
    downloads: {
      monthly: 246,
      weekly: 14,
    },
  },
})
