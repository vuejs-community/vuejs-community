import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-obfuscator',
  description: 'electron-vite 代码混淆插件：在 renderChunk 阶段混淆最终产物，按体积自适应强度，保留 Vite 动态 import 路径字符串，避免懒加载/可选链运行时崩溃。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'electron',
    'electron-vite',
    'obfuscator',
    'javascript-obfuscator',
    'code-protection',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-obfuscator',
  },
  source: {
    npm: 'vite-plugin-electron-obfuscator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
