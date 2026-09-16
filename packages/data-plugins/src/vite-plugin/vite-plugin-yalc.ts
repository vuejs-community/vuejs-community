import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-yalc',
  description: 'A yalc plugin for vite-based library projects.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-library',
    'vite-plugin',
    'yalc',
    'yalc-plugin',
  ],
  source: {
    github: 'ehubbell/vite-plugin-yalc',
    npm: 'vite-plugin-yalc',
  },
  links: {
    github: 'https://github.com/ehubbell/vite-plugin-yalc',
    npm: 'https://www.npmjs.com/package/vite-plugin-yalc',
    website: 'https://github.com/ehubbell/vite-plugin-yalc#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 31,
      weekly: 20,
    },
  },
})
