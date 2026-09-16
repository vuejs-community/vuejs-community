import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@meng-xi/vite-plugin',
  description: '一个为 Vite 提供实用插件的工具包，同时也是一个完整的插件开发框架',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    '@meng-xi/vite-plugin',
    'meng-xi',
    'vite-plugin',
    'vite',
    'plugin',
  ],
  source: {
    github: 'MengXi-Studio/vite-plugin',
    npm: '@meng-xi/vite-plugin',
  },
  links: {
    github: 'https://github.com/MengXi-Studio/vite-plugin',
    npm: 'https://www.npmjs.com/package/@meng-xi/vite-plugin',
    website: 'https://github.com/MengXi-Studio/vite-plugin#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 721,
      weekly: 19,
    },
  },
})
