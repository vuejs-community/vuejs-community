import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@manwang/langs-plugin',
  description: 'Vue 自动国际化插件 - 中文即开发语言，编译时自动转换为 $t()',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@manwang/langs-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 8,
    },
  },
})
