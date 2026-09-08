import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-docs',
  description: 'vite plugin auto document generation for vue',
  icon: 'logos:vite-icon',
  version: '0.1.15',
  category: 'plugin',
  tags: [
    'vue',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'meetqy/vite-plugin-vue-docs',
    npm: 'vite-plugin-vue-docs',
  },
  links: {
    github: 'https://github.com/meetqy/vite-plugin-vue-docs',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-docs',
  },
  stats: {
    downloads: {
      monthly: 100,
      weekly: 8,
    },
  },
})
