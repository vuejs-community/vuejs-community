import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-file-list',
  description: 'Lists all html files under the current project, useful for multi-page applications',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'file list',
    'html file list',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'amazingdudu/vite-plugin-html-file-list',
    npm: 'vite-plugin-html-file-list',
  },
  links: {
    github: 'https://github.com/amazingdudu/vite-plugin-html-file-list',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-file-list',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
