import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ethisyscore/vite-plugin',
  description: 'Vite plugin for EthisysCore Contract A plugins: manifest-driven HTML entry points (legacy iframe mode) plus build-time SDUI/ReactiveRule schema validation and declarative-resource emission.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ethisyscore',
    'vite',
    'vite-plugin',
    'plugin',
    'manifest',
    'sdui',
    'contract-a',
  ],
  source: {
    github: 'ethisysltd/ethisyscore-plugin-sdk',
    npm: '@ethisyscore/vite-plugin',
  },
  links: {
    github: 'https://github.com/ethisysltd/ethisyscore-plugin-sdk',
    npm: 'https://www.npmjs.com/package/@ethisyscore/vite-plugin',
    website: 'https://github.com/ethisysltd/ethisyscore-plugin-sdk#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10485,
      weekly: 3129,
    },
  },
})
