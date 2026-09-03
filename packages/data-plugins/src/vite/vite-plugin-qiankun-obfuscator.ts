import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-qiankun-obfuscator',
  description: 'Vite 插件：在生产构建时混淆业务代码，且不破坏 qiankun 微前端集成。',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'qiankun',
    'micro-frontend',
    'obfuscator',
    'javascript-obfuscator',
    'code-protection',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-qiankun-obfuscator',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
