import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-layoutaid',
  description: 'Vite plugin that adds visual layout aid for integrating web pages',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'layoutaid',
    'devtool',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'leoboyerbx/layout-aid',
    npm: 'vite-plugin-layoutaid',
  },
  links: {
    github: 'https://github.com/leoboyerbx/layout-aid',
    npm: 'https://www.npmjs.com/package/vite-plugin-layoutaid',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 18,
    },
  },
})
