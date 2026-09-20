import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cnhis-frontend/unplugin-i18n-helper',
  description: '自动查找 包含中文 的字符串和模板字符串，并替换为自定义的国际化方法',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vite',
    'unplugin',
    'i18n',
  ],
  links: {
    github: 'https://github.com/yysanf/vite-plugin-i18n-helper',
    npm: 'https://www.npmjs.com/package/@cnhis-frontend/unplugin-i18n-helper',
    website: 'https://github.com/yysanf/vite-plugin-i18n-helper/tree/unplugin/dev#readme',
  },
  source: {
    github: 'yysanf/vite-plugin-i18n-helper',
    npm: '@cnhis-frontend/unplugin-i18n-helper',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 286,
      weekly: 18,
    },
  },
})
