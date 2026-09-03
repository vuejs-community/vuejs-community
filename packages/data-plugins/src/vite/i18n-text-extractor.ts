import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'i18n-text-extractor',
  description: '自动提取Vue 3 + TypeScript项目中的硬编码文案并生成语言包',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'i18n',
    'vue3',
    'typescript',
    'internationalization',
    'text-extraction',
    'vite-plugin',
    'vue-i18n',
    'hardcoded-text',
    'language-pack',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/i18n-text-extractor',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 3,
    },
  },
})
