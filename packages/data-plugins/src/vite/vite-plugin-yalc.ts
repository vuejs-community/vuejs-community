import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-yalc',
  description: 'A yalc plugin for vite-based library projects.',
  icon: 'logos:vite-icon',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-library',
    'vite-plugin',
    'yalc',
    'yalc-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ehubbell/vite-plugin-yalc',
    npm: 'vite-plugin-yalc',
  },
  links: {
    github: 'https://github.com/ehubbell/vite-plugin-yalc',
    npm: 'https://www.npmjs.com/package/vite-plugin-yalc',
  },
  stats: {
    downloads: {
      monthly: 73,
      weekly: 2,
    },
  },
})
