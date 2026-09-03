import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ic-reactor/vite-plugin',
  description: 'Vite plugin for zero-config IC reactor generation from Candid files',
  version: '0.13.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'internet-computer',
    'candid',
    'ic-reactor',
    'dfinity',
    'icp',
    'llms',
    'ai-friendly',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/B3Pay/ic-reactor',
    npm: 'https://www.npmjs.com/package/@ic-reactor/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 848,
      weekly: 386,
    },
  },
})
