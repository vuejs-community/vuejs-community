import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@largev/releaseplugin',
  description: '用于Vite的发布插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-release',
  ],
  source: {
    npm: '@largev/releaseplugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@largev/releaseplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
