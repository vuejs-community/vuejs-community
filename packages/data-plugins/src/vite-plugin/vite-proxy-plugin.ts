import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-proxy-plugin',
  description: 'A plugin for visual management of Vite proxy configuration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'development',
    'devtools',
  ],
  links: {
    github: 'https://github.com/yourusername/vite-proxy-plugin',
    npm: 'https://www.npmjs.com/package/vite-proxy-plugin',
    website: 'https://github.com/yourusername/vite-proxy-plugin#readme',
  },
  source: {
    github: 'yourusername/vite-proxy-plugin',
    npm: 'vite-proxy-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
