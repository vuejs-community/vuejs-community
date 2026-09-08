import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-guides',
  description: 'A Vite plugin with small useful guides.',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'leoboyerbx/vite-plugin-dev-guides',
    npm: 'vite-plugin-dev-guides',
  },
  links: {
    github: 'https://github.com/leoboyerbx/vite-plugin-dev-guides',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-guides',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
