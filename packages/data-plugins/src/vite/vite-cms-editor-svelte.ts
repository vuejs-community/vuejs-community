import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-cms/editor-svelte',
  description: 'Edit content files from inside the vite app',
  version: '1.0.0-beta',
  category: 'plugin',
  tags: [
    'webwriter',
    'vite',
    'plugin.',
    'vite-plugin',
    'svelte',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/StarLederer/vite-plugin-content',
    npm: 'https://www.npmjs.com/package/@vite-cms/editor-svelte',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
