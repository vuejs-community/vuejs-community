import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vituum/vite-plugin-postcss',
  description: 'Vite plugin for PostCSS, adds basic plugins out of the box',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'postcss',
    'vituum',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vituum/vite-plugin-postcss',
    npm: 'https://www.npmjs.com/package/@vituum/vite-plugin-postcss',
    website: 'https://github.com/vituum/vite-plugin-postcss#readme',
  },
  source: {
    github: 'vituum/vite-plugin-postcss',
    npm: '@vituum/vite-plugin-postcss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5683,
      weekly: 559,
    },
  },
})
