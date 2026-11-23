import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-autojs6',
  description: 'AutoJs6 的 Vite 构建插件: TypeScript + ESM → 单文件脚本, 类型提示来自 @sm003/autojs6-dts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'autojs',
    'autojs6',
    'vite',
    'vite-plugin',
    'rhino',
    'typescript',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-autojs6',
    website: 'https://github.com/WhiteSevs/vite-plugin-autojs6',
  },
  source: {
    npm: 'vite-plugin-autojs6',
  },
})
