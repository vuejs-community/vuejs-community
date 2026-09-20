import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lass-lang/vite-plugin-lass',
  description: 'Vite plugin for Lass language',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lass',
    'vite',
    'vite-plugin',
    'css',
    'preprocessor',
    'styling',
    'hmr',
  ],
  links: {
    github: 'https://github.com/lass-lang/vite-plugin-lass',
    npm: 'https://www.npmjs.com/package/@lass-lang/vite-plugin-lass',
    website: 'https://github.com/lass-lang/vite-plugin-lass#readme',
  },
  source: {
    github: 'lass-lang/vite-plugin-lass',
    npm: '@lass-lang/vite-plugin-lass',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
