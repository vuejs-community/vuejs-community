import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nablops/vite-plugin',
  description: 'NablOps для Vite: релиз и debug id в бандл, загрузка source maps после сборки',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nablops',
    'vite-plugin',
    'sourcemaps',
    'debug-id',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@nablops/vite-plugin',
    website: 'https://nablops.io',
  },
  source: {
    npm: '@nablops/vite-plugin',
  },
})
