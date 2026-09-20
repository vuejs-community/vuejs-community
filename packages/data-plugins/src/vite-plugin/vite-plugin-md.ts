import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-md',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-md',
    website: 'https://github.com/antfu/vite-plugin-md',
  },
  source: {
    github: 'antfu/vite-plugin-md',
    npm: 'vite-plugin-md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45076,
      weekly: 13330,
    },
  },
})
