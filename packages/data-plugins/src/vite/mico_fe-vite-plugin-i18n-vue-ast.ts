import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mico_fe/vite-plugin-i18n-vue-ast',
  description: 'Vue i18n Vite plugin with AST-based transformation - More precise Chinese to $t(key) conversion',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vue',
    'i18n',
    'ast',
    'chinese',
    'auto-translate',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@mico_fe/vite-plugin-i18n-vue-ast',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
