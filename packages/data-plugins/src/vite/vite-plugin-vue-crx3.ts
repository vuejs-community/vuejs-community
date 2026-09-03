import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-crx3',
  description: '本Vite插件用于使用vite2+vue3开发chrome拓展（manifest v3），且支持开发过程中插件热重载.',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chrome extension',
    'manifest version 3',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yeqisong/vite-plugin-vue-crx3',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-crx3',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 9,
    },
  },
})
