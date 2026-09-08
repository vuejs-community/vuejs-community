import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-routes-ycj',
  description: 'A Vite plugin to auto-generate route configurations based on directory structure.',
  icon: 'logos:vite-icon',
  version: '1.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue-router',
    'auto-routes',
    'file-based-routing',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'syuan903/vite-plugin-auto-routes-YCJ',
    npm: 'vite-plugin-auto-routes-ycj',
  },
  links: {
    github: 'https://github.com/syuan903/vite-plugin-auto-routes-YCJ',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-routes-ycj',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 1,
    },
  },
})
