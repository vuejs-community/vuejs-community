import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@halfgray/vite-plugin-classic-js',
  description: 'This [Vite](https://vitejs.dev/) plugin enables imports of "classic" (non-module) scripts as static assets, with minification.',
  version: '1.2.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jack126guy/vite-plugin-classic-js',
    npm: 'https://www.npmjs.com/package/@halfgray/vite-plugin-classic-js',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
