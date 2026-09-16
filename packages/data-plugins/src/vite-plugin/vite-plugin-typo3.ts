import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typo3',
  description: 'Vite plugin to collect assets from TYPO3 extensions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 's2b/vite-plugin-typo3',
    npm: 'vite-plugin-typo3',
  },
  links: {
    github: 'https://github.com/s2b/vite-plugin-typo3',
    npm: 'https://www.npmjs.com/package/vite-plugin-typo3',
    website: 'https://github.com/s2b/vite-plugin-typo3',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 10014,
      weekly: 1582,
    },
  },
})
