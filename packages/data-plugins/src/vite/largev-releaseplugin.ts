import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@largev/releaseplugin',
  description: '用于Vite的发布插件',
  version: '1.1.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-release',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@largev/releaseplugin',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
