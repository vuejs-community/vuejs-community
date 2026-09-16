import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'typecomposer-plugin',
  description: 'TypeComposer plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'framework',
  ],
  source: {
    github: 'zico15/typecomposer-plugin',
    npm: 'typecomposer-plugin',
  },
  links: {
    github: 'https://github.com/zico15/typecomposer-plugin',
    npm: 'https://www.npmjs.com/package/typecomposer-plugin',
    website: 'https://github.com/zico15/typecomposer-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 59,
      weekly: 5,
    },
  },
})
