import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-i18never',
  description: 'i18never plugin for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18never',
    'i18n',
    'vite-plugin',
  ],
  source: {
    github: 'ksc-fe/i18never',
    npm: 'vite-plugin-i18never',
  },
  links: {
    github: 'https://github.com/ksc-fe/i18never',
    npm: 'https://www.npmjs.com/package/vite-plugin-i18never',
    website: 'https://github.com/ksc-fe/i18never#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
