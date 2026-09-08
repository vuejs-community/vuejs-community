import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-faker',
  description: 'A mock plugin for vite',
  icon: 'logos:vite-icon',
  version: '1.3.5',
  category: 'plugin',
  tags: [
    'vite',
    'mock',
    'hmr',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'JserWang/vite-plugin-faker',
    npm: 'vite-plugin-faker',
  },
  links: {
    github: 'https://github.com/JserWang/vite-plugin-faker',
    npm: 'https://www.npmjs.com/package/vite-plugin-faker',
  },
  stats: {
    downloads: {
      monthly: 65,
      weekly: 8,
    },
  },
})
