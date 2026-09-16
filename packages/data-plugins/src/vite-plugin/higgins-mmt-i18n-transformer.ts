import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@higgins-mmt/i18n-transformer',
  description: 'An automatic i18n conversion Vite/Webpack plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'i18n',
    'auto-i18n',
  ],
  source: {
    npm: '@higgins-mmt/i18n-transformer',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@higgins-mmt/i18n-transformer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
