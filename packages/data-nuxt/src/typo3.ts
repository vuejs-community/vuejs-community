import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'typo3',
  description: 'TYPO3 Headless Frontend Rendering module',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/TYPO3-Headless/nuxt-typo3',
    npm: 'https://npmjs.com/package/@t3headless/nuxt-typo3',
    website: 'https://t3headless.macopedia.io/nuxt-typo3/',
  },
  source: {
    github: 'TYPO3-Headless/nuxt-typo3',
    npm: '@t3headless/nuxt-typo3',
  },
  stats: {
    stars: 100,
    downloads: {
      monthly: 10711,
      weekly: 2623,
    },
  },
})
