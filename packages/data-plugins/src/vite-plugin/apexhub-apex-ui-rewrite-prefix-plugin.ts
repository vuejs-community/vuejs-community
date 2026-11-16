import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@apexhub/apex-ui-rewrite-prefix-plugin',
  description: 'Apex UI 前缀替换 Vite 插件 — 构建期将 apex- 类名/CSS 变量/内部标记重写为团队前缀',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'prefix',
    'rewrite',
    'white-label',
    'apex-ui',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@apexhub/apex-ui-rewrite-prefix-plugin',
  },
  source: {
    npm: '@apexhub/apex-ui-rewrite-prefix-plugin',
  },
})
