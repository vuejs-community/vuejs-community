import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unlockable/vite-plugin-unlock',
  description: 'Universal Vite plugin to unlock and override any module from any npm package by filename convention',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/unlockablejs/vite-plugin-unlock',
    npm: 'https://www.npmjs.com/package/@unlockable/vite-plugin-unlock',
    website: 'https://github.com/unlockablejs/vite-plugin-unlock#readme',
  },
  source: {
    github: 'unlockablejs/vite-plugin-unlock',
    npm: '@unlockable/vite-plugin-unlock',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 2770,
      weekly: 461,
    },
  },
})
