import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yummacss/vite',
  description: 'Vite plugin for Yumma CSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-framework',
    'typescript',
    'vite',
    'vite-plugin',
    'yummacss',
  ],
  source: {
    github: 'yummacss/yummacss',
    npm: '@yummacss/vite',
  },
  links: {
    github: 'https://github.com/yummacss/yummacss',
    npm: 'https://www.npmjs.com/package/@yummacss/vite',
    website: 'https://yummacss.com',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 425,
      weekly: 181,
    },
  },
})
