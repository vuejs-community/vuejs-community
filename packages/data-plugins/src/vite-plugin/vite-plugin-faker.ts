import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-faker',
  description: 'A mock plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'mock',
    'hmr',
    'vite-plugin',
  ],
  source: {
    github: 'JserWang/vite-plugin-faker',
    npm: 'vite-plugin-faker',
  },
  links: {
    github: 'https://github.com/JserWang/vite-plugin-faker',
    npm: 'https://www.npmjs.com/package/vite-plugin-faker',
    website: 'https://github.com/JserWang/vite-plugin-faker/tree/master/#readme',
  },
  stats: {
    stars: 25,
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
