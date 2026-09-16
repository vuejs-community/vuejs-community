import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-monaco-editor-next',
  description: 'A vite plugin for the Monaco Editor',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'monaco',
    'editor',
  ],
  source: {
    github: 'vdesjs/vite-plugin-monaco-editor',
    npm: 'vite-plugin-monaco-editor-next',
  },
  links: {
    github: 'https://github.com/vdesjs/vite-plugin-monaco-editor',
    npm: 'https://www.npmjs.com/package/vite-plugin-monaco-editor-next',
    website: 'https://github.com/vdesjs/vite-plugin-monaco-editor#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
