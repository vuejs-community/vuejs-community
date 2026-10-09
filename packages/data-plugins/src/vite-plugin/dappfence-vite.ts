import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dappfence/vite',
  description: 'Vite plugin for DappFence — script injection, manifest generation, and SPA-fallback support for static Vite builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'security',
    'service-worker',
    'integrity',
    'dapp',
    'web-security',
  ],
  links: {
    github: 'https://github.com/coinspect/dappfence',
    npm: 'https://www.npmjs.com/package/@dappfence/vite',
    website: 'https://github.com/coinspect/dappfence#readme',
  },
  source: {
    github: 'coinspect/dappfence',
    npm: '@dappfence/vite',
  },
})
