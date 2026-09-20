import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bignum/vite-plugin',
  description: 'Vite plugin to pre-compile BigNum template literals.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bignum',
    'formula',
    'template-literal',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ota-meshi/bignum',
    npm: 'https://www.npmjs.com/package/@bignum/vite-plugin',
    website: 'https://github.com/ota-meshi/bignum/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'ota-meshi/bignum',
    npm: '@bignum/vite-plugin',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
