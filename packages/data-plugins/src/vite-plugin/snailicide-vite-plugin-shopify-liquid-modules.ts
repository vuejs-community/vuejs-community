import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@snailicide/vite-plugin-shopify-liquid-modules',
  description: 'This vite plugin enables Shopify theme developers to structure their code into module folders ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'shopify',
    'vite-plugin',
  ],
  source: {
    github: 'gbtunney/snailicide-monorepo',
    npm: '@snailicide/vite-plugin-shopify-liquid-modules',
  },
  links: {
    github: 'https://github.com/gbtunney/snailicide-monorepo',
    npm: 'https://www.npmjs.com/package/@snailicide/vite-plugin-shopify-liquid-modules',
    website: 'https://github.com/gbtunney/snailicide-monorepo/tree/main/packages/vite-plugin-shopify-liquid-modules#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
