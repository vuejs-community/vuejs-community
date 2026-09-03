import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unlockable/vite-plugin-unlock',
  description: 'Universal Vite plugin to unlock and override any module from any npm package by filename convention',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'unlock',
    'override',
    'module-override',
    'component-override',
    'theming',
    'customization',
    'unlockable',
    'medusa',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/unlockablejs/vite-plugin-unlock',
    npm: 'https://www.npmjs.com/package/@unlockable/vite-plugin-unlock',
  },
  stats: {
    downloads: {
      monthly: 2592,
      weekly: 674,
    },
  },
})
