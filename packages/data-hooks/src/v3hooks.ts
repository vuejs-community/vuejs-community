import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'v3hooks',
  description: '针对 Vue 3 的实用 Hooks 集合，中文文档',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'vue3'],

  source: {
    github: 'yanzhandong/v3hooks',
    npm: 'v3hooks',
  },

  links: {
    github: 'https://github.com/yanzhandong/v3hooks',
    npm: 'https://www.npmjs.com/package/v3hooks',
    website: 'https://v3hooks.vercel.app',
  },

  stats: {
    stars: 222,
    downloads: {
      monthly: 134,
      weekly: 12,
    },
  },
})
