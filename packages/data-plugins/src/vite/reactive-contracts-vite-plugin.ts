import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@reactive-contracts/vite-plugin',
  description: 'Vite plugin for Reactive Contracts - auto-compile contracts with HMR support',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'reactive-contracts',
    'contracts',
    'api',
    'typescript',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/creativoma/reactive-contracts',
    npm: 'https://www.npmjs.com/package/@reactive-contracts/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
