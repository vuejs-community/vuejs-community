import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-monaco-editor-new',
  description: 'A vite plugin for the Monaco Editor',
  icon: 'logos:vite-icon',
  version: '1.1.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'monaco',
    'editor',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'vdesjs/vite-plugin-monaco-editor',
    npm: 'vite-plugin-monaco-editor-new',
  },
  links: {
    github: 'https://github.com/vdesjs/vite-plugin-monaco-editor',
    npm: 'https://www.npmjs.com/package/vite-plugin-monaco-editor-new',
  },
  stats: {
    downloads: {
      monthly: 240,
      weekly: 59,
    },
  },
})
