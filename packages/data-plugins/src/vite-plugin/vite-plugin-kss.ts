import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kss',
  description: 'Plugin to integrate KSS into the Vite bundling process',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'kss',
    'kss-node',
  ],
  links: {
    github: 'https://github.com/pixeldesu/vite-plugin-kss',
    npm: 'https://www.npmjs.com/package/vite-plugin-kss',
    website: 'https://github.com/pixeldesu/vite-plugin-kss#readme',
  },
  source: {
    github: 'pixeldesu/vite-plugin-kss',
    npm: 'vite-plugin-kss',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
