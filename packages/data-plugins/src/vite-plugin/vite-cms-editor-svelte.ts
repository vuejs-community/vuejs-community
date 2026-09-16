import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-cms/editor-svelte',
  description: 'Edit content files from inside the vite app',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webwriter',
    'vite',
    'plugin.',
    'vite-plugin',
    'svelte',
  ],
  source: {
    github: 'StarLederer/vite-plugin-content',
    npm: '@vite-cms/editor-svelte',
  },
  links: {
    github: 'https://github.com/StarLederer/vite-plugin-content',
    npm: 'https://www.npmjs.com/package/@vite-cms/editor-svelte',
    website: 'https://github.com/StarLederer/vite-plugin-content#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
