import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-consoles',
  description: '一个vite插件 用来扩展你的console.log',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'console',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ALiangTech/vite-plugin-consoles',
    npm: 'https://www.npmjs.com/package/vite-plugin-consoles',
    website: 'https://github.com/ALiangTech/vite-plugin-consoles#readme',
  },
  source: {
    github: 'ALiangTech/vite-plugin-consoles',
    npm: 'vite-plugin-consoles',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
