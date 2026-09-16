import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kevinmarrec/vite-plugin-dark-mode',
  description: 'Vite plugin to set initial color scheme based on user preferences.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dark-mode',
  ],
  source: {
    github: 'kevinmarrec/vite-plugin-dark-mode',
    npm: '@kevinmarrec/vite-plugin-dark-mode',
  },
  links: {
    github: 'https://github.com/kevinmarrec/vite-plugin-dark-mode',
    npm: 'https://www.npmjs.com/package/@kevinmarrec/vite-plugin-dark-mode',
    website: 'https://github.com/kevinmarrec/vite-plugin-dark-mode#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 57,
      weekly: 5,
    },
  },
})
