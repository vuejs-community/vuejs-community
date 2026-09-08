import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-consoles',
  description: '一个vite插件 用来扩展你的console.log',
  icon: 'logos:vite-icon',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'console',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ALiangTech/vite-plugin-consoles',
    npm: 'vite-plugin-consoles',
  },
  links: {
    github: 'https://github.com/ALiangTech/vite-plugin-consoles',
    npm: 'https://www.npmjs.com/package/vite-plugin-consoles',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 0,
    },
  },
})
