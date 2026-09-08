import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-turbo-reload',
  description: 'Reload the page when files are modified via Hotwire Turbo',
  icon: 'logos:vite-icon',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'vitejs',
    'full',
    'reload',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ermolaev/vite-plugin-full-reload',
    npm: 'vite-plugin-turbo-reload',
  },
  links: {
    github: 'https://github.com/ermolaev/vite-plugin-full-reload',
    npm: 'https://www.npmjs.com/package/vite-plugin-turbo-reload',
  },
  stats: {
    downloads: {
      monthly: 962,
      weekly: 278,
    },
  },
})
