import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kss',
  description: 'Plugin to integrate KSS into the Vite bundling process',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'kss',
    'kss-node',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'pixeldesu/vite-plugin-kss',
    npm: 'vite-plugin-kss',
  },
  links: {
    github: 'https://github.com/pixeldesu/vite-plugin-kss',
    npm: 'https://www.npmjs.com/package/vite-plugin-kss',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
