import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@anfo/vite-dialogs-plugin',
  description: 'A Vite plugin that auto-generates a type-safe virtual module for mounting Vue dialog/drawer components programmatically.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'dialog',
    'drawer',
    'vue3',
  ],
  source: {
    npm: '@anfo/vite-dialogs-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@anfo/vite-dialogs-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 268,
      weekly: 7,
    },
  },
})
