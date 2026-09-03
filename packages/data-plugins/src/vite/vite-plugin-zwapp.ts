import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zwapp',
  description: 'Vite plugin that can inject h functions and Fragments. 可以给zwapp注入h和Fragment的vite插件',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'zwapp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-zwapp',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
