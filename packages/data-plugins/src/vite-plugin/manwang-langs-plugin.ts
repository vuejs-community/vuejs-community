import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@manwang/langs-plugin',
  description: 'Vue 自动国际化插件 - 中文即开发语言，编译时自动转换为 $t()',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vue3',
    'i18n',
    'internationalization',
    'chinese',
    'auto-translate',
    'vite-plugin',
    'compile-time',
  ],
  source: {
    npm: '@manwang/langs-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@manwang/langs-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
