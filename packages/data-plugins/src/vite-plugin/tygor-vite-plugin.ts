import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tygor/vite-plugin',
  description: 'Vite plugin for tygor - hot reload Go backend with error overlay',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tygor',
    'hot-reload',
    'go',
    'golang',
    'typescript',
  ],
  source: {
    npm: '@tygor/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@tygor/vite-plugin',
    website: 'https://github.com/broady/tygor#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
