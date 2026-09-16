import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@reactive-contracts/vite-plugin',
  description: 'Vite plugin for Reactive Contracts - auto-compile contracts with HMR support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'reactive-contracts',
    'contracts',
    'api',
    'typescript',
    'hmr',
  ],
  source: {
    github: 'creativoma/reactive-contracts',
    npm: '@reactive-contracts/vite-plugin',
  },
  links: {
    github: 'https://github.com/creativoma/reactive-contracts',
    npm: 'https://www.npmjs.com/package/@reactive-contracts/vite-plugin',
    website: 'https://github.com/creativoma/reactive-contracts',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
