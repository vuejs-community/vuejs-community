import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-file-list',
  description: 'Lists all html files under the current project, useful for multi-page applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'file list',
    'html file list',
  ],
  links: {
    github: 'https://github.com/amazingdudu/vite-plugin-html-file-list',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-file-list',
    website: 'https://github.com/amazingdudu/vite-plugin-html-file-list#readme',
  },
  source: {
    github: 'amazingdudu/vite-plugin-html-file-list',
    npm: 'vite-plugin-html-file-list',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
