import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-email',
  description: 'Send emails rendered by Vite and Markdown-It automatically',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'markdown',
    'email',
  ],
  source: {
    github: 'yjl9903/vite-email',
    npm: 'vite-email',
  },
  links: {
    github: 'https://github.com/yjl9903/vite-email',
    npm: 'https://www.npmjs.com/package/vite-email',
    website: 'https://github.com/yjl9903/vite-email#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 38,
      weekly: 5,
    },
  },
})
