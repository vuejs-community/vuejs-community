import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ic-reactor/vite-plugin',
  description: 'Vite plugin for zero-config IC reactor generation from Candid files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'B3Pay/ic-reactor',
    npm: '@ic-reactor/vite-plugin',
  },
  links: {
    github: 'https://github.com/B3Pay/ic-reactor',
    npm: 'https://www.npmjs.com/package/@ic-reactor/vite-plugin',
    website: 'https://ic-reactor.b3pay.net/v3/packages/vite-plugin',
  },
  stats: {
    stars: 20,
    downloads: {
      monthly: 704,
      weekly: 188,
    },
  },
})
