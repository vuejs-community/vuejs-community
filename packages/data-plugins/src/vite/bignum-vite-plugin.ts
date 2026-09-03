import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bignum/vite-plugin',
  description: 'Vite plugin to pre-compile BigNum template literals.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'bignum',
    'formula',
    'template-literal',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ota-meshi/bignum',
    npm: 'https://www.npmjs.com/package/@bignum/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
