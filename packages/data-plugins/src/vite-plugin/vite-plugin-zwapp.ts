import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zwapp',
  description: 'Vite plugin that can inject h functions and Fragments. 可以给zwapp注入h和Fragment的vite插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'zwapp',
  ],
  source: {
    npm: 'vite-plugin-zwapp',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-zwapp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
