import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-guardian',
  description: '构建产物治理插件：体积预算门禁 + 基于 SourceMap 的字节级依赖体积归因',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rollup-plugin',
    'bundle-size',
    'budget',
    'dependency-analysis',
    'sourcemap',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-guardian',
    website: 'https://gitee.com/north-shallow-butterfly/vite-plugin-bundle-guardian#readme',
  },
  source: {
    npm: 'vite-plugin-bundle-guardian',
  },
})
