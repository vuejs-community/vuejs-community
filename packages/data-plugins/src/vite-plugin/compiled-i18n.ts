import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'compiled-i18n',
  description: 'Framework-independent internationalization support for Vite-built projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wmertens/compiled-i18n',
    npm: 'https://www.npmjs.com/package/compiled-i18n',
    website: 'https://github.com/wmertens/compiled-i18n',
  },
  source: {
    github: 'wmertens/compiled-i18n',
    npm: 'compiled-i18n',
  },
  stats: {
    stars: 34,
    downloads: {
      monthly: 4927,
      weekly: 519,
    },
  },
})
