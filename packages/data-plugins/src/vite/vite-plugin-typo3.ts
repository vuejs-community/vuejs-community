import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typo3',
  description: 'Vite plugin to collect assets from TYPO3 extensions',
  icon: 'logos:vite-icon',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 's2b/vite-plugin-typo3',
    npm: 'vite-plugin-typo3',
  },
  links: {
    github: 'https://github.com/s2b/vite-plugin-typo3',
    npm: 'https://www.npmjs.com/package/vite-plugin-typo3',
  },
  stats: {
    downloads: {
      monthly: 10277,
      weekly: 3092,
    },
  },
})
