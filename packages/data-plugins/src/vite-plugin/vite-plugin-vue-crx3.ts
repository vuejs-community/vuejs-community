import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-crx3',
  description: '本Vite插件用于使用vite2+vue3开发chrome拓展（manifest v3），且支持开发过程中插件热重载.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chrome extension',
    'manifest version 3',
  ],
  links: {
    github: 'https://github.com/yeqisong/vite-plugin-vue-crx3',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-crx3',
    website: 'https://github.com/yeqisong/vite-plugin-vue-crx3#readme',
  },
  source: {
    github: 'yeqisong/vite-plugin-vue-crx3',
    npm: 'vite-plugin-vue-crx3',
  },
  stats: {
    stars: 79,
    downloads: {
      monthly: 45,
      weekly: 6,
    },
  },
})
