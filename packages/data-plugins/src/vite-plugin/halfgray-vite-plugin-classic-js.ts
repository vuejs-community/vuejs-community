import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@halfgray/vite-plugin-classic-js',
  description: 'This [Vite](https://vitejs.dev/) plugin enables imports of "classic" (non-module) scripts as static assets, with minification.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/jack126guy/vite-plugin-classic-js',
    npm: 'https://www.npmjs.com/package/@halfgray/vite-plugin-classic-js',
    website: 'https://github.com/jack126guy/vite-plugin-classic-js#readme',
  },
  source: {
    github: 'jack126guy/vite-plugin-classic-js',
    npm: '@halfgray/vite-plugin-classic-js',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 2,
    },
  },
})
