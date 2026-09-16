import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-windicss-theme',
  description: 'Access your WindiCSS theme and colors objects from a vite app.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'askalice/vite-plugin-windicss-theme',
    npm: 'vite-plugin-windicss-theme',
  },
  links: {
    github: 'https://github.com/askalice/vite-plugin-windicss-theme',
    npm: 'https://www.npmjs.com/package/vite-plugin-windicss-theme',
    website: 'https://github.com/askalice/vite-plugin-windicss-theme#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
