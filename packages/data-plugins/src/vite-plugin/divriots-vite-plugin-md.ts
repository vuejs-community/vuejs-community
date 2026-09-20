import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@divriots/vite-plugin-md',
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
  links: {
    github: 'https://github.com/antfu/vite-plugin-md',
    npm: 'https://www.npmjs.com/package/@divriots/vite-plugin-md',
    website: 'https://github.com/antfu/vite-plugin-md',
  },
  source: {
    github: 'antfu/vite-plugin-md',
    npm: '@divriots/vite-plugin-md',
  },
  stats: {
    stars: 639,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
