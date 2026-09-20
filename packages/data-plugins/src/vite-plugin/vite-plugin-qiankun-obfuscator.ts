import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-qiankun-obfuscator',
  description: 'Vite 插件：在生产构建时混淆业务代码，且不破坏 qiankun 微前端集成。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'qiankun',
    'micro-frontend',
    'obfuscator',
    'javascript-obfuscator',
    'code-protection',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-qiankun-obfuscator',
  },
  source: {
    npm: 'vite-plugin-qiankun-obfuscator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
