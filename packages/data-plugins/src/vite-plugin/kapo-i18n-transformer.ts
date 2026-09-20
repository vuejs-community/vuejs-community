import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kapo/i18n-transformer',
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
  links: {
    npm: 'https://www.npmjs.com/package/@kapo/i18n-transformer',
  },
  source: {
    npm: '@kapo/i18n-transformer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 8,
    },
  },
})
