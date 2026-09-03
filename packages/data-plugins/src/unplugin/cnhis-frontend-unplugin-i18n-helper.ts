import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cnhis-frontend/unplugin-i18n-helper',
  description: '自动查找 包含中文 的字符串和模板字符串，并替换为自定义的国际化方法',
  version: '2.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'unplugin',
    'i18n',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/yysanf/vite-plugin-i18n-helper',
    npm: 'https://www.npmjs.com/package/@cnhis-frontend/unplugin-i18n-helper',
  },
  stats: {
    downloads: {
      monthly: 266,
      weekly: 204,
    },
  },
})
