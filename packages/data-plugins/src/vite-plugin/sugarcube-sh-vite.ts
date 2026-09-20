import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sugarcube-sh/vite',
  description: 'Vite plugin for sugarcube',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'cube-css',
    'design-system',
    'design-tokens',
    'sugarcube',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sugarcube-sh/sugarcube',
    npm: 'https://www.npmjs.com/package/@sugarcube-sh/vite',
    website: 'https://github.com/sugarcube-sh/sugarcube#readme',
  },
  source: {
    github: 'sugarcube-sh/sugarcube',
    npm: '@sugarcube-sh/vite',
  },
  stats: {
    stars: 124,
    downloads: {
      monthly: 769,
      weekly: 67,
    },
  },
})
