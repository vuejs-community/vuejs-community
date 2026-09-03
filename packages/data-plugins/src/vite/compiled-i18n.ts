import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'compiled-i18n',
  description: 'Framework-independent internationalization support for Vite-built projects',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'i18n',
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wmertens/compiled-i18n',
    npm: 'https://www.npmjs.com/package/compiled-i18n',
  },
  stats: {
    downloads: {
      monthly: 5352,
      weekly: 1375,
    },
  },
})
