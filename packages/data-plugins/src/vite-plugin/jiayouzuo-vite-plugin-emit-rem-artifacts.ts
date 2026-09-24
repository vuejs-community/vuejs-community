import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jiayouzuo/vite-plugin-emit-rem-artifacts',
  description: 'Vite 插件：保留原版 CSS 与 JS 入口，额外输出 rem 样式和引用它们的入口',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'rem',
    'postcss',
    'module-federation',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@jiayouzuo/vite-plugin-emit-rem-artifacts',
  },
  source: {
    npm: '@jiayouzuo/vite-plugin-emit-rem-artifacts',
  },
})
