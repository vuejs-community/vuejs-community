import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svgv',
  description: 'A vite plugin use to load SVG files as Vue components',
  icon: 'logos:vite-icon',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'w2xi/vite-plugins',
    npm: 'vite-plugin-svgv',
  },
  links: {
    github: 'https://github.com/w2xi/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-svgv',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
