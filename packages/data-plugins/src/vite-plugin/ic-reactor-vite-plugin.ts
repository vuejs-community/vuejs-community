import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ic-reactor/vite-plugin',
  description: 'Vite plugin that generates candid-core modules from .did files with candid-core-cli and injects the local IC environment (ic_env cookie and /api proxy) in development',
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
  links: {
    github: 'https://github.com/B3Pay/ic-reactor',
    npm: 'https://www.npmjs.com/package/@ic-reactor/vite-plugin',
    website: 'https://ic-reactor.b3pay.net/v4/packages/vite-plugin/',
  },
  source: {
    github: 'B3Pay/ic-reactor',
    npm: '@ic-reactor/vite-plugin',
  },
  stats: {
    stars: 20,
    downloads: {
      monthly: 704,
      weekly: 188,
    },
  },
})
