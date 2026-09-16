import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-liquid',
  description: 'Vite plugin for LiquidJS, transforms liquid templates into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'liquidjs',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vituum/vite-plugin-liquid',
    npm: '@vituum/vite-plugin-liquid',
  },
  links: {
    github: 'https://github.com/vituum/vite-plugin-liquid',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-liquid',
    website: 'https://github.com/vituum/vite-plugin-liquid#readme',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 6511,
      weekly: 961,
    },
  },
})
