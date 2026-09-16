import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chaspy/denshobato-vite-plugin',
  description: 'Vite plugin for Denshobato Studio - JSX transform and dev server middleware',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'react',
    'jsx-transform',
    'denshobato',
  ],
  source: {
    github: 'chaspy/denshobato-studio',
    npm: '@chaspy/denshobato-vite-plugin',
  },
  links: {
    github: 'https://github.com/chaspy/denshobato-studio',
    npm: 'https://www.npmjs.com/package/@chaspy/denshobato-vite-plugin',
    website: 'https://github.com/chaspy/denshobato-studio#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
