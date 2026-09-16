import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-md-temp',
  description: 'Markdown for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'markdown-it',
  ],
  source: {
    github: 'antfu/vite-plugin-md',
    npm: 'vite-plugin-md-temp',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-md',
    npm: 'https://www.npmjs.com/package/vite-plugin-md-temp',
    website: 'https://github.com/antfu/vite-plugin-md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
