import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cdn2',
  description: 'A Vite plugin that allowed you replace module with CDN',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cdn',
    'vite-plugin-cdn',
  ],
  source: {
    github: 'nonzzz/vite-plugin-cdn',
    npm: 'vite-plugin-cdn2',
  },
  links: {
    github: 'https://github.com/nonzzz/vite-plugin-cdn',
    npm: 'https://www.npmjs.com/package/vite-plugin-cdn2',
    website: 'https://github.com/nonzzz/vite-plugin-cdn',
  },
  stats: {
    stars: 80,
    downloads: {
      monthly: 1622,
      weekly: 253,
    },
  },
})
