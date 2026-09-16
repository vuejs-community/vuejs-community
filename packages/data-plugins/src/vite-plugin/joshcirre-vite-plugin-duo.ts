import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@joshcirre/vite-plugin-duo',
  description: 'Vite plugin for Duo - Local-first IndexedDB syncing for Laravel and Livewire',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'livewire',
    'indexeddb',
    'local-first',
    'offline',
    'duo',
  ],
  source: {
    github: 'joshcirre/duo',
    npm: '@joshcirre/vite-plugin-duo',
  },
  links: {
    github: 'https://github.com/joshcirre/duo',
    npm: 'https://www.npmjs.com/package/@joshcirre/vite-plugin-duo',
    website: 'https://github.com/joshcirre/duo#readme',
  },
  stats: {
    stars: 36,
    downloads: {
      monthly: 213,
      weekly: 24,
    },
  },
})
