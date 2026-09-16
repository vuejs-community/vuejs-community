import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-melange',
  description: 'Vite plugin for Melange',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'melange',
  ],
  source: {
    github: 'pdelacroix/vite-plugin-melange',
    npm: 'vite-plugin-melange',
  },
  links: {
    github: 'https://github.com/pdelacroix/vite-plugin-melange',
    npm: 'https://www.npmjs.com/package/vite-plugin-melange',
    website: 'https://github.com/pdelacroix/vite-plugin-melange#vite-plugin-melange',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 43,
      weekly: 10,
    },
  },
})
