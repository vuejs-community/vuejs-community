import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-cms/content',
  description: 'Preprocess markdown files and add them to the vite output directory',
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
    npm: '@vite-cms/content',
  },
  links: {
    github: 'https://github.com/StarLederer/vite-plugin-content',
    npm: 'https://www.npmjs.com/package/@vite-cms/content',
    website: 'https://github.com/StarLederer/vite-plugin-content#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
