import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-proxy-plugin',
  description: 'A plugin for visual management of Vite proxy configuration.',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'development',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yourusername/vite-proxy-plugin',
    npm: 'https://www.npmjs.com/package/vite-proxy-plugin',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
