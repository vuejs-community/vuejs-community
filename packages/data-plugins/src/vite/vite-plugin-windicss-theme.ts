import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-windicss-theme',
  description: 'Access your WindiCSS theme and colors objects from a vite app.',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'askalice/vite-plugin-windicss-theme',
    npm: 'vite-plugin-windicss-theme',
  },
  links: {
    github: 'https://github.com/askalice/vite-plugin-windicss-theme',
    npm: 'https://www.npmjs.com/package/vite-plugin-windicss-theme',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
