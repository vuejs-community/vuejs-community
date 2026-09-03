import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vite-cms/content',
  description: 'Preprocess markdown files and add them to the vite output directory',
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
    npm: 'https://www.npmjs.com/package/@vite-cms/content',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
