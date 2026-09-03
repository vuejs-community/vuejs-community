import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jscad',
  description: 'Vite plugin for previewing and compiling JSCAD (and TSCAD) models',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'jscad',
    'tscad',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-jscad',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
