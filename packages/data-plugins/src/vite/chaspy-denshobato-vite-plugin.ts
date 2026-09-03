import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chaspy/denshobato-vite-plugin',
  description: 'Vite plugin for Denshobato Studio - JSX transform and dev server middleware',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'react',
    'jsx-transform',
    'denshobato',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chaspy/denshobato-studio',
    npm: 'https://www.npmjs.com/package/@chaspy/denshobato-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
