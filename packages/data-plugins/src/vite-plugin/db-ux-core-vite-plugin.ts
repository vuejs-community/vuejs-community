import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@db-ux/core-vite-plugin',
  description: 'Vite plugin for optimized DB UX Design System CSS imports',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'db-ux',
    'design-system',
  ],
  links: {
    github: 'https://github.com/db-ux-design-system/core-web',
    npm: 'https://www.npmjs.com/package/@db-ux/core-vite-plugin',
    website: 'https://github.com/db-ux-design-system/core-web#readme',
  },
  source: {
    github: 'db-ux-design-system/core-web',
    npm: '@db-ux/core-vite-plugin',
  },
  stats: {
    stars: 131,
    downloads: {
      monthly: 1929,
      weekly: 488,
    },
  },
})
