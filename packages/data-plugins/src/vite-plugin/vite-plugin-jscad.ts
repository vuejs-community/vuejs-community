import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jscad',
  description: 'Vite plugin for previewing and compiling JSCAD (and TSCAD) models',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'jscad',
    'tscad',
  ],
  source: {
    npm: 'vite-plugin-jscad',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-jscad',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
