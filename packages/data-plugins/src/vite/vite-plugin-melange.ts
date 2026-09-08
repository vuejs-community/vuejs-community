import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-melange',
  description: 'Vite plugin for Melange',
  icon: 'logos:vite-icon',
  version: '3.11.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'melange',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'pdelacroix/vite-plugin-melange',
    npm: 'vite-plugin-melange',
  },
  links: {
    github: 'https://github.com/pdelacroix/vite-plugin-melange',
    npm: 'https://www.npmjs.com/package/vite-plugin-melange',
  },
  stats: {
    downloads: {
      monthly: 129,
      weekly: 6,
    },
  },
})
