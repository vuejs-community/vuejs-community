import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@keenpix/vite',
  description: 'Keenpix configuration and virtual-module plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'keenpix',
    'image',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lord007tn/keenpix',
    npm: 'https://www.npmjs.com/package/@keenpix/vite',
    website: 'https://keenpix.com',
  },
  source: {
    github: 'lord007tn/keenpix',
    npm: '@keenpix/vite',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 465,
      weekly: 12,
    },
  },
})
