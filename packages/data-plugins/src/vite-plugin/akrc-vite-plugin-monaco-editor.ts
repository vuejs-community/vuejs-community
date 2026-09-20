import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@akrc/vite-plugin-monaco-editor',
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
  links: {
    github: 'https://github.com/akarachen/vite-plugin-monaco-editor',
    npm: 'https://www.npmjs.com/package/@akrc/vite-plugin-monaco-editor',
    website: 'https://github.com/akarachen/vite-plugin-monaco-editor#readme',
  },
  source: {
    github: 'akarachen/vite-plugin-monaco-editor',
    npm: '@akrc/vite-plugin-monaco-editor',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 5251,
      weekly: 1376,
    },
  },
})
