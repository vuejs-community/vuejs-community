import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-semi-theme',
  description: '- [theme options docs](https://github.com/DouyinFE/semi-design/tree/main/packages/semi-webpack#api)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'semi-ui',
  ],
  source: {
    github: 'boenfu/vite-plugin-semi-theme',
    npm: 'vite-plugin-semi-theme',
  },
  links: {
    github: 'https://github.com/boenfu/vite-plugin-semi-theme',
    npm: 'https://www.npmjs.com/package/vite-plugin-semi-theme',
    website: 'https://github.com/boenfu/vite-plugin-semi-theme#readme',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 598,
      weekly: 97,
    },
  },
})
